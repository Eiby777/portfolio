export type SkillLevel = 'experto' | 'avanzado' | 'intermedio';

export interface CandidateDescriptor {
  id: string;
  name: string;
  currentRole: string;
  location: string;
  yearsExperience: number;
  coreSkills: Array<{ name: string; level: SkillLevel }>;
  achievements: string[];
  focusAreas: string[];
}

export class JobContext {
  private readonly title: string;
  private readonly requiredSkills: string[];
  private readonly mustHaves: string[];
  private readonly niceToHaves: string[];

  constructor(
    title: string,
    requiredSkills: string[],
    mustHaves: string[],
    niceToHaves: string[]
  ) {
    this.title = title;
    this.requiredSkills = requiredSkills;
    this.mustHaves = mustHaves;
    this.niceToHaves = niceToHaves;
  }

  get roleTitle(): string {
    return this.title;
  }

  get keywords(): string[] {
    return [...this.requiredSkills, ...this.mustHaves, ...this.niceToHaves];
  }

  get primarySkills(): string[] {
    return this.requiredSkills;
  }

  get focusAreas(): string[] {
    return this.mustHaves;
  }

  get complementarySkills(): string[] {
    return this.niceToHaves;
  }
}

export class CandidateMatchSummary {
  readonly matchScore: number;
  readonly highlights: string[];
  readonly focusAlignment: string;

  constructor(matchScore: number, highlights: string[], focusAlignment: string) {
    this.matchScore = matchScore;
    this.highlights = highlights;
    this.focusAlignment = focusAlignment;
  }
}

export class InterviewQuestionGenerator {
  private readonly context: JobContext;

  constructor(context: JobContext) {
    this.context = context;
  }

  generateFor(candidate: CandidateProfile, limit = 3): string[] {
    const thematicAreas = candidate.getFocusAreas();
    const questions = thematicAreas.map((area) =>
      `¿Cómo has aplicado ${area.toLowerCase()} en un proyecto reciente y qué aprendiste?`
    );

    if (thematicAreas.length === 0) {
      questions.push(
        `Describe cómo te prepararías para impactar un rol de ${this.context.roleTitle} en los primeros 90 días.`
      );
    }

    const uniqueQuestions = Array.from(new Set(questions));
    return uniqueQuestions.slice(0, limit);
  }
}

export class CandidateProfile {
  private readonly descriptor: CandidateDescriptor;

  private constructor(descriptor: CandidateDescriptor) {
    this.descriptor = descriptor;
  }

  static fromDescriptor(descriptor: CandidateDescriptor): CandidateProfile {
    return new CandidateProfile(descriptor);
  }

  get id(): string {
    return this.descriptor.id;
  }

  get name(): string {
    return this.descriptor.name;
  }

  get currentRole(): string {
    return this.descriptor.currentRole;
  }

  get location(): string {
    return this.descriptor.location;
  }

  get experience(): number {
    return this.descriptor.yearsExperience;
  }

  get skills(): Array<{ name: string; level: SkillLevel }> {
    return this.descriptor.coreSkills;
  }

  get achievements(): string[] {
    return this.descriptor.achievements;
  }

  getFocusAreas(): string[] {
    return this.descriptor.focusAreas;
  }

  calculateMatch(context: JobContext): CandidateMatchSummary {
    const required = context.primarySkills;
    const focusAreas = context.focusAreas;
    const candidateSkills = this.skills.map((skill) => skill.name.toLowerCase());

    const requiredOverlap = required.filter((skill) => candidateSkills.includes(skill.toLowerCase())).length;
    const focusOverlap = focusAreas.filter((area) =>
      this.getFocusAreas().some((focus) => focus.toLowerCase().includes(area.toLowerCase()))
    ).length;

    const skillScore = required.length === 0 ? 0 : requiredOverlap / required.length;
    const focusScore = focusAreas.length === 0 ? 0 : focusOverlap / focusAreas.length;
    const experienceScore = Math.min(this.experience / 5, 1); // Normaliza a 5 años

    const matchScore = Math.round((skillScore * 0.5 + focusScore * 0.3 + experienceScore * 0.2) * 100);

    const highlights = [
      `${this.name} domina ${requiredOverlap}/${required.length} habilidades clave del rol`,
      `Experiencia relevante: ${this.experience} años en ${this.currentRole}`,
    ];

    if (focusOverlap > 0) {
      highlights.push(`Foco destacado en ${this.getFocusAreas().slice(0, 2).join(', ')}`);
    }

    const focusAlignment = focusOverlap > 0
      ? `Perfecto para profundizar en ${this.getFocusAreas()[0]}`
      : 'Alineación cultural y potencial de crecimiento alto';

    return new CandidateMatchSummary(matchScore, highlights, focusAlignment);
  }

  generateInterviewQuestions(generator: InterviewQuestionGenerator): string[] {
    return generator.generateFor(this);
  }
}
