import { FaArrowRight } from 'react-icons/fa';
import Button from '../../ui/Button';
import { ProjectContainer, Container, SectionTitle, SectionSubtitle, ContentGrid, ProjectInfo, ProblemStatement, ProblemTitle, ProblemText, SolutionStatement, SolutionTitle, SolutionText, TechStack, TechBadge, DemoContainer, CtaContainer } from './Styles/ProjectTemplateStyles';
import type { Project } from '../../../types';

interface ProjectTemplateProps {
  project: Project;
  demoComponent: React.ReactNode;
  problemIcon: React.ComponentType;
  solutionIcon: React.ComponentType;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  project,
  demoComponent,
  problemIcon: ProblemIcon,
  solutionIcon: SolutionIcon,
}) => {
  return (
    <ProjectContainer id={project.id} $bgColor={project.bgColor}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {project.description}
        </SectionSubtitle>

        <ContentGrid>
          <ProjectInfo
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProblemStatement $color={project.color}>
              <ProblemTitle $color={project.color}>
                <ProblemIcon />
                Problema
              </ProblemTitle>
              <ProblemText>
                {project.problem}
              </ProblemText>
            </ProblemStatement>

            <SolutionStatement $color={project.color}>
              <SolutionTitle $color={project.color}>
                <SolutionIcon />
                Solución
              </SolutionTitle>
              <SolutionText>
                {project.solution}
              </SolutionText>
            </SolutionStatement>

            <div>
              <h4 style={{ marginBottom: '1rem', color: project.secondaryColor }}>Tecnologías:</h4>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechBadge key={index} $color={project.color}>{tech}</TechBadge>
                ))}
              </TechStack>
            </div>
          </ProjectInfo>

          <DemoContainer
            $color={project.color}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {demoComponent}
          </DemoContainer>
        </ContentGrid>

        <CtaContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            color={project.color}
            backgroundColor={project.bgColor}
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            Ver Proyecto Completo
            <FaArrowRight />
          </Button>
        </CtaContainer>
      </Container>
    </ProjectContainer>
  );
};

export default ProjectTemplate;