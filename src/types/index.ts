export type UserRole = 'student' | 'supervisor' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  avatar_url?: string;
  nisn_nip?: string;
  institution?: string;
  created_at: string;
}

export interface InternshipInfo {
  id: string;
  student_id: string;
  supervisor_id: string;
  company_name: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'completed' | 'on_hold';
}

export interface JournalEntry {
  id: string;
  student_id: string;
  date: string;
  work_hours: number;
  description: string;
  evidence_url?: string;
  status: 'pending' | 'validated' | 'rejected';
  rejection_reason?: string;
  feedback?: string;
  supervisor_id?: string;
  created_at: string;
}

export interface Attendance {
  id: string;
  student_id: string;
  date: string;
  check_in_time?: string;
  check_out_time?: string;
  location_lat?: number;
  location_lng?: number;
  status: 'present' | 'absent' | 'late' | 'excused';
}
