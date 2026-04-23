import 'package:flutter/material.dart';

class SupervisorDashboard extends StatelessWidget {
  const SupervisorDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Panel Pembimbing', style: TextStyle(fontWeight: FontWeight.bold)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Stats Row
            Row(
              children: [
                _buildStatBox('Siswa', '12', Icons.group),
                const SizedBox(width: 16),
                _buildStatBox('Validasi', '8', Icons.pending_actions),
              ],
            ),
            const SizedBox(height: 24),
            
            // Alert
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: Colors.red[50], borderRadius: BorderRadius.circular(16)),
              child: Row(
                children: const [
                  Icon(Icons.warning, color: Colors.red),
                  SizedBox(width: 12),
                  Expanded(child: Text('3 Siswa belum mengisi absensi hari ini.', style: TextStyle(color: Colors.red))),
                ],
              ),
            ),
            const SizedBox(height: 24),
            
            // Pending Requests (Simplified)
            const Text('Tugas Menunggu', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            _buildTaskItem('Validasi Jurnal: Budi Santoso'),
            _buildTaskItem('Validasi Jurnal: Siti Aminah'),
          ],
        ),
      ),
    );
  }

  Widget _buildStatBox(String label, String val, IconData icon) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, border: Border.all(color: Colors.grey.shade200), borderRadius: BorderRadius.circular(16)),
        child: Column(
          children: [
            Icon(icon, color: Colors.blue),
            Text(val, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
            Text(label, style: const TextStyle(color: Colors.grey)),
          ],
        ),
      ),
    );
  }

  Widget _buildTaskItem(String title) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, border: Border.all(color: Colors.grey.shade200), borderRadius: BorderRadius.circular(16)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(title),
          ElevatedButton(onPressed: () {}, child: const Text('Validasi')),
        ],
      ),
    );
  }
}
