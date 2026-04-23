import 'package:supabase_flutter/supabase_flutter.dart';

class SupabaseService {
  static final client = Supabase.instance.client;

  // Sign In
  static Future<AuthResponse> signIn(String email, String password) async {
    return await client.auth.signInWithPassword(email: email, password: password);
  }

  // Get Journal Entries
  static Future<List<dynamic>> getJournals() async {
    return await client.from('journals').select('*');
  }
}
