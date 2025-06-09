// hitungan dasboard

const dashboardData = {
    summary: {
        TotalOmzet: 8000000,
        TotalReservation: 100,
        TotalVisitor: 500,
        TotalRooms: 50,
    },
    RoomTypes: [
        // tempat untuk input tipe kamar
        { name: 'Aster Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Bluebell Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Camellia Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Dahlia Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Aster Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Bluebell Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Camellia Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Dahlia Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Aster Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Bluebell Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Camellia Room', usagePercentage: 80, omzet: 2000000 },
        { name: 'Dahlia Room', usagePercentage: 80, omzet: 2000000 },
    ]
};


// fungsi untuk format mata uang rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}


// fungsi untuk memperbarui dashboard secara ringkas
function updateSummaryCards() {
    
    const totalOmzetElement = document.getElementById('TotalOmzet');
    if (totalOmzetElement) totalOmzetElement.textContent = formatRupiah(dashboardData.summary.TotalOmzet);

    const totalReservationElement = document.getElementById('TotalReservation');
    if (totalReservationElement) totalReservationElement.textContent = dashboardData.summary.TotalReservation;

    const totalVisitorElement = document.getElementById('TotalVisitor');
    if (totalVisitorElement) totalVisitorElement.textContent = dashboardData.summary.TotalVisitor;

    const totalRoomsElement = document.getElementById('TotalRooms');
    if (totalRoomsElement) totalRoomsElement.textContent = dashboardData.summary.TotalRooms;
}


// fungsi untuk membuat dan menampilan grafik di dashboard kamar
function createRoomUsageCards() {
    const container = document.getElementById('roomUsageContainer');
    
    if (!container) {
        console.error("Error: 'roomUsageContainer' not found. Cannot create room usage cards.");
        return; 
    }
    container.innerHTML = ''; 

    dashboardData.RoomTypes.forEach(room => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-4 m-2 flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out'; //efek hover

        card.innerHTML = `
    <h2 class="text-xl font-semibold text-gray-800 mb-2">${room.name}</h2>
    <div class="flex items-center justify-between w-full mb-4">
        <div class="w-1/2">
            <p class="text-lg text-gray-600">Percentage of Usage</p>
            <p class="text-2xl font-bold text-orange-600 percentage-text">${room.usagePercentage}%</p>
        </div>
        <div class="chart-container w-1/2 flex justify-end">
            <canvas class="room-chart w-24 h-24" data-room-name="${room.name.replace(/\s/g, '-')}" data-percentage="${room.usagePercentage}"></canvas>
        </div>
    </div >
    <p class="text-lg text-gray-600 mt-2 ">Omzet</p>
    <p class="text-xl font-bold text-black omzet-text">${formatRupiah(room.omzet)}</p>
`;
        container.appendChild(card);
    });

    // memanggil semua char setelah ditambahkan ke DOM
    initializeRoomCharts();
}


// fungsi untuk menginisialisasi dan menampilkan donat grafik kamar
function initializeRoomCharts() {
    
    document.querySelectorAll('.room-chart').forEach(canvas => {
        const ctx = canvas.getContext('2d');
        const percentage = parseFloat(canvas.dataset.percentage);
        const remainingPercentage = 100 - percentage; 

        // Initialize a new Chart.js doughnut chart
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [percentage, remainingPercentage],
                    backgroundColor: ['#EB5B00', '#E0E0E0'], // warna orange dan sisa warna abu-abu
                    borderWidth: 0 //tidak pakai border
                }]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false, 
                cutout: '80%', // ukuran donat didalam
                plugins: {
                    legend: {
                        display: false 
                    },
                    tooltip: {
                        enabled: false 
                    }
                }
            }
        });
    });
}

// fungsi untuk menampilan pesan pencarian
function displaySearchMessage(message) {
    const searchMessageElement = document.getElementById('searchMessage');
    if (searchMessageElement) {
        searchMessageElement.textContent = message;
        searchMessageElement.classList.remove('hidden'); // menampikan pesan
        
        setTimeout(() => {
            searchMessageElement.classList.add('hidden');
            searchMessageElement.textContent = '';
        }, 3000); 
    }
}

// menu search
document.getElementById('searchButton').addEventListener('click', () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Use template literals (backticks) for console.log
    console.log(`Mencari data dari ${startDate} sampai ${endDate}`);

    // Call the custom message display function instead of alert
    displaySearchMessage('Fungsi pencarian belum bisa dipakai sepenuhnya, hanya untuk tampilan simulasi saja.');

});


// Ensure all DOM content is loaded before running scripts that interact with it
document.addEventListener('DOMContentLoaded', () => {
    updateSummaryCards(); // Update summary dashboard
    createRoomUsageCards(); // Create and display room usage charts
});
