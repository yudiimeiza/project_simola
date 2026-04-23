import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/login_screen.dart';
import 'screens/student_dashboard.dart';
import 'screens/supervisor_dashboard.dart';

void main() {
  runApp(const SiMolaApp());
}

class SiMolaApp extends StatelessWidget {
  const SiMolaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SiMola',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF003D9B),
          primary: const Color(0xFF003D9B),
          secondary: const Color(0xFF00687B),
          surface: const Color(0xFFF9F9FF),
        ),
        textTheme: GoogleFonts.interTextTheme(),
      ),
      initialRoute: '/login',
      routes: {
        '/login': (context) => const LoginScreen(),
        '/student_dashboard': (context) => const StudentDashboard(),
        '/supervisor_dashboard': (context) => const SupervisorDashboard(),
      },
    );
  }
}
