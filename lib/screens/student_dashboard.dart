import 'package:flutter/material.dart';

class StudentDashboard extends StatelessWidget {
  const StudentDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SiMola', style: TextStyle(fontWeight: FontWeight.w900, fontStyle: FontStyle.italic)),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.notifications_none)),
          const CircleAvatar(
            backgroundImage: NetworkImage('https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'),
          ),
          const SizedBox(width: 16),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Profile Card
            _buildProfileCard(context),
            const SizedBox(height: 24),
            
            // Progress Section
            _buildProgressCard(context),
            const SizedBox(height: 24),
            
            // Action Buttons
            Row(
              children: [
                Expanded(child: _buildAttendanceButton(context, 'Masuk', Icons.login, Colors.teal)),
                const SizedBox(width: 16),
                Expanded(child: _buildAttendanceButton(context, 'Keluar', Icons.logout, Colors.blue, isDisabled: true)),
              ],
            ),
            const SizedBox(height: 24),
            
            // Recent Journal
            _buildJournalCard(context),
            const SizedBox(height: 24),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.dashboard), label: 'Beranda'),
          BottomNavigationBarItem(icon: Icon(Icons.edit_note), label: 'Jurnal'),
          BottomNavigationBarItem(icon: Icon(Icons.alarm_on), label: 'Presensi'),
          BottomNavigationBarItem(icon: Icon(Icons.description), label: 'Laporan'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profil'),
        ],
      ),
    );
  }

  Widget _buildProfileCard(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.grey.shade200),
      ),
      child: Row(
        children: [
          const CircleAvatar(
            radius: 40,
            backgroundImage: NetworkImage('https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Alex Thompson', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.blue)),
                const Text('Siswa SMK Tingkat Akhir • UI/UX Design'),
                const SizedBox(height: 8),
                Row(
                  children: const [
                    Icon(Icons.business, size: 14, color: Colors.grey),
                    SizedBox(width: 4),
                    Text('TechFlow Systems Inc.', style: TextStyle(fontSize: 10, color: Colors.grey)),
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildProgressCard(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Theme.of(context).primaryColor,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('Progres Saat Ini', style: TextStyle(color: Colors.white70)),
          const Text('92%', style: TextStyle(color: Colors.white, fontSize: 40, fontWeight: FontWeight.bold)),
          const SizedBox(height: 8),
          LinearProgressIndicator(value: 0.92, backgroundColor: Colors.white24, color: Colors.blue[200]),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(child: _buildMiniStat('Log Jurnal', '48/50')),
              const SizedBox(width: 16),
              Expanded(child: _buildMiniStat('Sisa Minggu', '4')),
            ],
          )
        ],
      ),
    );
  }

  Widget _buildMiniStat(String label, String val) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(12)),
      child: Column(
        children: [
          Text(label, style: const TextStyle(color: Colors.white70, fontSize: 10)),
          Text(val, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  Widget _buildAttendanceButton(BuildContext context, String label, IconData icon, Color color, {bool isDisabled = false}) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: isDisabled ? Colors.grey.shade200 : color.withOpacity(0.5)),
      ),
      child: Opacity(
        opacity: isDisabled ? 0.5 : 1.0,
        child: Column(
          children: [
            Icon(icon, color: color, size: 32),
            const SizedBox(height: 8),
            Text(label, style: TextStyle(color: color, fontWeight: FontWeight.bold, fontSize: 18)),
          ],
        ),
      ),
    );
  }

  Widget _buildJournalCard(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey.shade200),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text('LOG KEMARIN', style: TextStyle(fontSize: 10, color: Colors.grey)),
                Text('Implementasi frontend widget dasbor utama.', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              ],
            ),
          ),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: Theme.of(context).primaryColor, borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20))),
            child: const Center(child: Text('Buat Log', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold))),
          )
        ],
      ),
    );
  }
}
