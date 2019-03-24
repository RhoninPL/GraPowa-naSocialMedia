export interface UserAnswer {
  Id: number;
  Answer: Answer;
  Weight: number;
}

export interface Question {
  id?: string;
  question: string;
  hint: string;
  dates: Answer[];
  contents: Answer[];
}

export interface Answer {
  date?: string;
  content?: string;
  quality: number;
}
