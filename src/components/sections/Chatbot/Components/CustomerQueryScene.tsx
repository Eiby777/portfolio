import { motion } from 'framer-motion';
import { FaFileAlt, FaShieldAlt, FaClock } from 'react-icons/fa';
import { ChatbotScenario } from '../Models/ChatbotScenario';
import {
  AnimationWrapper,
  SceneContent,
  MessageList,
  MessageBubble,
  PersonaTag,
  HighlightCard,
  HighlightTitle,
  HighlightText,
} from '../Styles/LayoutStyles';

const CustomerQueryScene: React.FC = () => {
  const scenario = ChatbotScenario.createCustomerServiceScenario();
  const [firstMessage] = scenario.allMessages;

  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <SceneContent>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <PersonaTag>Cliente real</PersonaTag>
          <MessageList>
            <MessageBubble
              $author={firstMessage.author}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {firstMessage.content}
            </MessageBubble>
          </MessageList>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <PersonaTag>Base de conocimiento utilizada por la IA</PersonaTag>
          <HighlightCard
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <HighlightTitle>
              <FaFileAlt /> Políticas de entrega
            </HighlightTitle>
            <HighlightText>
              El modelo interpreta automáticamente tus PDFs internos y manuales de servicio para responder según cada región.
            </HighlightText>
          </HighlightCard>

          <HighlightCard
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <HighlightTitle>
              <FaShieldAlt /> Cumplimiento garantizado
            </HighlightTitle>
            <HighlightText>
              Cada respuesta valida si cumple tus políticas antes de entregarse al cliente.
            </HighlightText>
          </HighlightCard>

          <HighlightCard
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <HighlightTitle>
              <FaClock /> 3 segundos promedio
            </HighlightTitle>
            <HighlightText>
              Menos de 3 segundos para encontrar la mejor respuesta en más de 200 documentos.
            </HighlightText>
          </HighlightCard>
        </motion.div>
      </SceneContent>
    </AnimationWrapper>
  );
};

export default CustomerQueryScene;
