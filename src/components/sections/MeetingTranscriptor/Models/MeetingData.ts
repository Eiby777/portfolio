export interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: string;
}

export class MeetingParticipant {
  private readonly _name: string;
  private readonly _role: string;

  constructor(name: string, role: string) {
    this._name = name;
    this._role = role;
  }

  get name(): string {
    return this._name;
  }

  get role(): string {
    return this._role;
  }

  get displayLabel(): string {
    return `${this._name} · ${this._role}`;
  }
}

export class MeetingActionItem {
  private readonly _description: string;
  private readonly _owner: MeetingParticipant;
  private readonly _dueDate: string;

  constructor(description: string, owner: MeetingParticipant, dueDate: string) {
    this._description = description;
    this._owner = owner;
    this._dueDate = dueDate;
  }

  get description(): string {
    return this._description;
  }

  get owner(): MeetingParticipant {
    return this._owner;
  }

  get dueDate(): string {
    return this._dueDate;
  }
}

export class ExecutiveSummary {
  private readonly _overview: string[];
  private readonly _agreements: string[];

  constructor(overview: string[], agreements: string[]) {
    this._overview = overview;
    this._agreements = agreements;
  }

  get overview(): string[] {
    return [...this._overview];
  }

  get agreements(): string[] {
    return [...this._agreements];
  }
}

export class MeetingTranscript {
  private readonly entries: TranscriptEntry[];

  constructor(initialEntries?: TranscriptEntry[]) {
    this.entries = initialEntries ? [...initialEntries] : [];
  }

  addEntry(entry: TranscriptEntry): MeetingTranscript {
    return new MeetingTranscript([...this.entries, entry]);
  }

  getEntries(): TranscriptEntry[] {
    return [...this.entries];
  }

  getLatest(limit: number): TranscriptEntry[] {
    return this.entries.slice(-limit);
  }
}

export class MeetingArtifactsFactory {
  static createParticipants(): MeetingParticipant[] {
    return [
      new MeetingParticipant('Laura Méndez', 'Directora de Operaciones'),
      new MeetingParticipant('Carlos Ruiz', 'Gerente Comercial'),
      new MeetingParticipant('Abisay Medina', 'Especialista IA')
    ];
  }

  static createTranscriptSample(): MeetingTranscript {
    const transcript = new MeetingTranscript([
      {
        speaker: 'Laura',
        text: 'Necesitamos acelerar el onboarding de nuevos clientes empresariales.',
        timestamp: '00:02:14'
      },
      {
        speaker: 'Carlos',
        text: 'Los formularios manuales están tardando hasta 5 días en completarse.',
        timestamp: '00:03:01'
      },
      {
        speaker: 'Abisay',
        text: 'La propuesta es automatizar la captura de documentos y validaciones con IA.',
        timestamp: '00:05:45'
      }
    ]);

    return transcript.addEntry({
      speaker: 'Laura',
      text: 'El objetivo es bajar el tiempo de registro a menos de 24 horas.',
      timestamp: '00:07:22'
    });
  }

  static createExecutiveSummary(): ExecutiveSummary {
    return new ExecutiveSummary(
      [
        'Implementar un flujo automatizado para el onboarding de clientes corporativos en RD Banca.',
        'Aprovechar modelos de reconocimiento de documentos y agentes IA para validar información en tiempo real.'
      ],
      [
        'Adoptar un portal inteligente de registro para clientes empresariales en el piloto de diciembre.',
        'Configurar validaciones automáticas de documentos fiscales y bancarios.',
        'Liberar dashboards con métricas de onboarding cada semana.'
      ]
    );
  }

  static createActionItems(): MeetingActionItem[] {
    const [laura, carlos, abisay] = this.createParticipants();

    return [
      new MeetingActionItem('Diseñar flujo automatizado de onboarding', laura, '04 de diciembre'),
      new MeetingActionItem('Definir métricas de éxito y tableros', carlos, '06 de diciembre'),
      new MeetingActionItem('Entrenar modelo de clasificación documental', abisay, '11 de diciembre')
    ];
  }
}
