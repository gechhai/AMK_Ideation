export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  sources?: Source[];
}

export interface Source {
  path: string;
  title: string;
}

export interface Document {
  id: string;
  title: string;
  path: string;
  uploadedAt: string;
}