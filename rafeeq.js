let currentVitals = {
    bpm: 78,
    sys: 120,
    dia: 80,
    temp: 36.8,
    spo2: 98
};

// Default initial data for the chart
let heartRateData = [72, 75, 78, 74, 76, 79, 82, 80, 78, 77, 75, 78];
let timeLabels = ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45', '10:50', 'الآن'];

// Medical History Array
let medicalHistory = [
    { time: 'اليوم 10:50 ص', bpm: 78, bp: '120/80', temp: 36.8, spo2: 98, notes: 'المريض في حالة مستقرة' }
];

let heartRateChart;

document.addEventListener('DOMContentLoaded', () => {
    // Global variable for email alerts
    window.patientEmail = null;
    window.emailAlertSent = false;

    // Check for patient data from login page
    const storedData = localStorage.getItem('rafeeq_patient_data');
    if (storedData) {
        const patient = JSON.parse(storedData);
        if (patient.email) window.patientEmail = patient.email;
        
        // Update Header
        const detailsContainer = document.querySelector('.patient-details');
        if(detailsContainer) {
            detailsContainer.innerHTML = `
                <h2>${patient.name}</h2>
                <p>العمر: ${patient.age}</p>
                <p style="font-size: 13px; margin-top: 5px; color: var(--warning); font-weight: bold;"><i class="ph ph-phone-call"></i> أرقام الطوارئ: ${patient.emergency || 'لا يوجد'}</p>
                <p style="font-size: 13px; margin-top: 5px; color: var(--text-main);"><i class="ph ph-map-pin"></i> ${patient.address}</p>
            `;
        }
    } else {
        // Force redirect to login page if no data found
        window.location.href = 'rafeeq_login.html';
        return; // Stop further execution
    }

    // Handle Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('rafeeq_patient_data');
            window.location.href = 'rafeeq_login.html';
        });
    }

    // Initialize Chart
    initChart();
    
    // Render initial history
    renderHistory();
    


    // Start Fake Live Vitals
    startLiveVitals();

    // Smooth scrolling for nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 40,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Update active state
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function initChart() {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
    
    // Create gradient for chart fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 26, 26, 0.5)');   
    gradient.addColorStop(1, 'rgba(255, 26, 26, 0.0)');

    // Set defaults for RTL and colors
    Chart.defaults.color = '#a0a0a0';
    Chart.defaults.font.family = "'Cairo', sans-serif";

    heartRateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'نبضات القلب (BPM)',
                data: heartRateData,
                borderColor: '#ff1a1a',
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#0a0a0a',
                pointBorderColor: '#ff1a1a',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4 // Smooth curves
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 10, 10, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#ff1a1a',
                    borderColor: 'rgba(255, 26, 26, 0.5)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    titleFont: { size: 14, family: "'Cairo', sans-serif" },
                    bodyFont: { size: 16, weight: 'bold', family: "'Outfit', sans-serif" }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 120,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}



function updateChart(newBpm) {
    // Get current time formatted
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // Remove oldest data point
    heartRateData.shift();
    timeLabels.shift();
    
    // Add new data point
    heartRateData.push(parseInt(newBpm));
    timeLabels.push(timeString);
    
    // Update chart
    heartRateChart.update();
}

function addToHistory(bpm, sys, dia, temp, spo2, notes) {
    const now = new Date();
    const timeString = `اليوم ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const newRecord = {
        time: timeString,
        bpm: bpm,
        bp: `${sys}/${dia}`,
        temp: temp,
        spo2: spo2,
        notes: notes || 'لا توجد ملاحظات'
    };
    
    // Add to beginning of array
    medicalHistory.unshift(newRecord);
    
    // Re-render table
    renderHistory();
}

function renderHistory() {
    const tbody = document.getElementById('historyTableBody');
    tbody.innerHTML = '';
    
    medicalHistory.forEach(record => {
        const tr = document.createElement('tr');
        
        // Determine status colors based on values
        let tempColor = record.temp > 37.5 ? 'color: var(--warning)' : '';
        let spo2Color = record.spo2 < 95 ? 'color: var(--danger)' : '';
        let bpmColor = (record.bpm < 60 || record.bpm > 100) ? 'color: var(--danger)' : '';
        
        tr.innerHTML = `
            <td>${record.time}</td>
            <td style="${bpmColor}; font-weight: bold;">${record.bpm}</td>
            <td>${record.bp}</td>
            <td style="${tempColor}">${record.temp}°C</td>
            <td style="${spo2Color}">${record.spo2}%</td>
            <td style="color: var(--text-muted); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${record.notes}">
                ${record.notes}
            </td>
        `;
        
        tbody.appendChild(tr);
    });
}



function startLiveVitals() {
    setInterval(() => {
        // Randomly fluctuate vitals slightly
        currentVitals.bpm += Math.floor(Math.random() * 5) - 2; // -2 to +2
        currentVitals.sys += Math.floor(Math.random() * 3) - 1; 
        currentVitals.dia += Math.floor(Math.random() * 3) - 1;
        currentVitals.temp += (Math.random() * 0.2 - 0.1); // -0.1 to +0.1
        currentVitals.spo2 += Math.floor(Math.random() * 3) - 1;
        
        // Keep within reasonable bounds
        if(currentVitals.bpm > 110) currentVitals.bpm = 105;
        if(currentVitals.bpm < 60) currentVitals.bpm = 65;
        if(currentVitals.spo2 > 100) currentVitals.spo2 = 100;
        if(currentVitals.spo2 < 90) currentVitals.spo2 = 92;
        
        // Update DOM Elements directly for live feel
        document.getElementById('bpmVal').innerText = currentVitals.bpm;
        document.getElementById('bpVal').innerText = `${currentVitals.sys}/${currentVitals.dia}`;
        document.getElementById('tempVal').innerText = currentVitals.temp.toFixed(1);
        document.getElementById('spo2Val').innerText = currentVitals.spo2;
        
        // Update chart with live fake data
        updateChart(currentVitals.bpm);

        // Periodically add to medical history automatically (Fake Live Notes)
        if (Math.random() > 0.8) { // 20% chance every 2.5s
            let note = "حالة مستقرة والطبيعي";
            if (currentVitals.bpm > 95) note = "تسارع في النبض، تحت المراقبة";
            else if (currentVitals.spo2 < 95) note = "نقص في الأكسجين";
            else if (currentVitals.temp > 37.3) note = "مؤشر لارتفاع طفيف في الحرارة";
            
            addToHistory(currentVitals.bpm, currentVitals.sys, currentVitals.dia, currentVitals.temp.toFixed(1), currentVitals.spo2, note);
        }

        // Send fake Gmail alert if in danger
        if ((currentVitals.bpm > 100 || currentVitals.spo2 <= 93 || currentVitals.temp > 38.0) && window.patientEmail && !window.emailAlertSent) {
            alert(`🚨 تحذير أمني وطبي!\nتم رصد خطورة في المؤشرات الحيوية للمريض.\nتم إرسال رسالة طوارئ فورية إلى الجيميل: ${window.patientEmail}`);
            window.emailAlertSent = true;
        } else if (currentVitals.bpm <= 90 && currentVitals.spo2 >= 96 && currentVitals.temp <= 37.2) {
            // Reset alert flag when vitals normalize
            window.emailAlertSent = false;
        }
        
    }, 2500); // Update every 2.5 seconds
}

