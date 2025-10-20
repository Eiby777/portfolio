export interface FloatingShape {
  size: number;
  color: string;
  top: string;
  left: string;
}

export const floatingShapes: FloatingShape[] = [
  { size: 300, color: '#667eea', top: '10%', left: '10%' },
  { size: 200, color: '#764ba2', top: '60%', left: '80%' },
  { size: 250, color: '#f093fb', top: '80%', left: '20%' },
  { size: 150, color: '#4facfe', top: '30%', left: '70%' },
];