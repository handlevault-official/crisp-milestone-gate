const milestoneData = {
    title: "Phase 1 Execution",
    targetDate: "Q3 2026",
    status: "Verified & Locked"
};

function showSuccess() {
    document.getElementById('stepGate').classList.add('hidden');
    document.getElementById('resTitle').innerText = milestoneData.title;
    document.getElementById('resDate').innerText = milestoneData.targetDate;
    document.getElementById('resCode').innerText = 'CRISP-MILE-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    
    document.getElementById('stepPass').classList.remove('hidden');
}
