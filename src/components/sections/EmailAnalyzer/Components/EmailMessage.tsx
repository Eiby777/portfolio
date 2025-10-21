import React from 'react';
import { motion } from 'framer-motion';
import type { EmailMessage as EmailMessageType } from '../Models/emailThreadsData';
import { EmailContainer, EmailAvatar, EmailContent, EmailMeta, From, ToCc, Date, EmailBody, QuotedText, QuotedHeader } from '../Styles/EmailThreadStyles';

interface EmailMessageProps {
  message: EmailMessageType;
  index: number;
  totalMessages: number;
}

/**
 * Component for displaying an individual email message in Gmail format
 * @param message - The email message data to display
 * @param index - The index of the message in the thread
 * @param totalMessages - Total number of messages in the thread
 */
const EmailMessage: React.FC<EmailMessageProps> = ({ message, index }) => {
  // Extract sender initials for avatar
  const getSenderInitials = (email: string): string => {
    const name = email.split('@')[0];
    const parts = name.split('.');
    if (parts.length >= 2) {
      return `${parts[0][0].toUpperCase()}${parts[1][0].toUpperCase()}`;
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Get sender display name
  const getSenderName = (email: string): string => {
    const name = email.split('@')[0];
    const parts = name.split('.');
    if (parts.length >= 2) {
      return `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)} ${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)}`;
    }
    return name;
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Check if this is a reply (not the first message)
  const isReply = index > 0;

  // Get avatar background color based on sender
  const getAvatarColor = (email: string): string => {
    const colors = ['#1a73e8', '#34a853', '#ea4335', '#fbbc04', '#9333ea', '#e91e63'];
    const hash = email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <EmailContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: message.animationDelay / 1000,
        ease: "easeOut"
      }}
      $isRead={message.isRead}
    >
      <EmailAvatar
        style={{ backgroundColor: getAvatarColor(message.from) }}
      >
        {getSenderInitials(message.from)}
      </EmailAvatar>
      
      <EmailContent>
        <EmailMeta>
          <From>{getSenderName(message.from)}</From>
          <ToCc>
            {isReply ? 'to ' : ''}
            {message.to.map(email => email.split('@')[0]).join(', ')}
            {message.cc && message.cc.length > 0 && (
              <span>, cc: {message.cc.map(email => email.split('@')[0]).join(', ')}</span>
            )}
          </ToCc>
          <Date>{formatDate(message.date)}</Date>
        </EmailMeta>
        
        <EmailBody>
          {message.body.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph || <br />}</p>
          ))}
          
          {/* For replies, show quoted text from previous message */}
          {isReply && index > 0 && (
            <QuotedText>
              <QuotedHeader>
                On {message.date.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })} at {formatDate(message.date)} {getSenderName(message.from)} wrote:
              </QuotedHeader>
            </QuotedText>
          )}
        </EmailBody>
      </EmailContent>
    </EmailContainer>
  );
};

export default EmailMessage;