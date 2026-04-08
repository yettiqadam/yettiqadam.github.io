/**
 * GEOGRAPHIC DISCOVERY: QUYI AMUDARYO EDITION
 * Logic: 4 Teams, Duel format, 5 step distance
 */

const QUESTIONS_DB = [
    { q: "Quyi Amudaryo iqtisodiy rayoni qaysi hududlarni o'z ichiga oladi?", a: ["Xorazm va Qoraqalpog'iston", "Buxoro va Navoiy", "Farg'ona va Namangan", "Toshkent va Sirdaryo"], correct: 0 },
    { q: "Rayonning asosiy suv manbayi qaysi?", a: ["Sirdaryo", "Amudaryo", "Zarafshon", "Qashqadaryo"], correct: 1 },
    { q: "Qoraqalpog'iston Respublikasining poytaxti qaysi shahar?", a: ["Urganch", "Xiva", "Nukus", "Qo'ng'irot"], correct: 2 },
    { q: "Xorazm viloyatining ma'muriy markazi qaysi?", a: ["Urganch", "Xazarasp", "To'rtko'l", "Shovot"], correct: 0 },
    { q: "Mo'ynoq qachonlar qanday sanoati bilan mashhur bo'lgan?", a: ["Mashinasozlik", "Baliq konserva", "Kimyo", "To'qimachilik"], correct: 1 },
    { q: "Ustyurt gaz-kimyo majmuasi qayerda joylashgan?", a: ["Navoiyda", "Xorazmda", "Qoraqalpog'istonda", "Buxoroda"], correct: 2 },
    { q: "Quyi Amudaryoda qanday ekologik halokat sodir bo'lgan?", a: ["Orol dengizining qurishi", "O'rmon yong'inlari", "Zilzila", "Suv toshqinlari"], correct: 0 },
    { q: "Xiva qaysi xalqaro tashkilot ro'yxatiga kiritilgan?", a: ["NATO", "BMT", "YuNESKO", "SHHT"], correct: 2 },
    { q: "Qo'ng'irotda qanday yirik zavod faoliyat yuritadi?", a: ["Neftni qayta ishlash", "Soda zavodi", "Sement zavodi", "Traktor zavodi"], correct: 1 },
    { q: "Xorazm viloyati asosan qaysi qishloq xo'jalik ekinini ko'p yetishtiradi?", a: ["Bug'doy va arpa", "Paxta va sholi", "Makkajo'xori", "Kartoshka"], correct: 1 },
    { q: "Quyi Amudaryo hududi janubdan qaysi davlat bilan chegaradosh?", a: ["Qozog'iston", "Tojikiston", "Afg'oniston", "Turkmaniston"], correct: 3 },
    { q: "Qoraqalpog'iston qaysi iqlim mintaqasida joylashgan?", a: ["Subtropik", "Ekvatorial", "Keskin kontinental", "Musson"], correct: 2 },
    { q: "Taxiatoshda qanday energiya korxonasi bor?", a: ["GES", "IES", "AES", "Quyosh elektr stansiyasi"], correct: 1 },
    { q: "Pitnak (Xorazm) qaysi zavodi bilan mashhur?", a: ["Avtomobil (Damas)", "Sement", "Neft gaz", "To'qimachilik"], correct: 0 },
    { q: "Ichan-qal'a qayta tiklangan va himoyalangan qaysi shahar qismi?", a: ["Nukus", "Urganch", "Xiva", "To'rtko'l"], correct: 2 },
    { q: "Xorazmda ishlab chiqarishning qaysi tarmog'i yetakchi hisoblanadi?", a: ["Og'ir mashinasozlik", "Yengil va oziq-ovqat sanoati", "Qora metallurgiya", "Kimyo sanoati"], correct: 1 },
    { q: "Quyi Amudaryo paxtasining katta qismi qayerda qayta ishlanadi?", a: ["Faqat Tolaga", "O'z hududida yengil sanoatda", "Xorijda", "Toshkentda"], correct: 1 },
    { q: "Savitskiy nomidagi san'at muzeyi qayerda joylashgan?", a: ["Urganch", "Xiva", "Nukus", "Beruniy"], correct: 2 },
    { q: "O'zbekistonning qaysi viloyati hududi maydoni bo'yicha kichiklardan sanaladi va Quyi amudaryoda joylashgan?", a: ["Andijon", "Namangan", "Xorazm", "Sirdaryo"], correct: 2 },
    { q: "Quyi Amudaryo iqtisodiy rayoni g'arbdan qaysi plato orqali o'tadi?", a: ["Ustyurt platosi", "Qarshi cho'li", "Mirzacho'l", "Farg'ona vodiysi"], correct: 0 },
    { q: "Amudaryo sohillaridagi qalin chakalakzorlar nima deb ataladi?", a: ["To'qayzor", "O'rmon", "Tayga", "Changalzor"], correct: 0 },
    { q: "Shovot va Xonqa qaysi viloyat tumanlari qatoriga kiradi?", a: ["Buxoro", "Navoiy", "Qoraqalpog'iston", "Xorazm"], correct: 3 },
    { q: "Orol tangligi qaysi tarmoqlar rivojiga kuchli zarba berdi?", a: ["Baliqchilik va kema qatnovi", "Mashinasozlik", "To'qimachilik", "Metallurgiya"], correct: 0 },
    { q: "Xorazm vohasiga suv asosan qayerdan keladi?", a: ["Yer osti suvlari", "Buloqlar", "Tuyamo'yin suv ombori", "Chorvoq"], correct: 2 },
    { q: "Urganch va Nukus o'rtasidagi hudud qaysi daryo bo'ylab joylashgan?", a: ["Sirdaryo", "Qashqadaryo", "Zarafshon", "Amudaryo"], correct: 3 },
    { q: "Quyi Amudaryo cho'llari...", a: ["Faqat Qizilqum", "Qoraqum va Qizilqum", "Mirzacho'l", "Ustyurt, Qizilqum, Orolqum"], correct: 3 },
    { q: "Orolqum bu qanday joy?", a: ["Qadimgi shahar", "Qurigan Orol dengizi tubida hosil bo'lgan cho'l", "Yangi ko'l", "Tog' tizmasi"], correct: 1 },
    { q: "Beruniy, To'rtko'l va Ellikqal'a ma'muriy jihatdan qaysi hududga qaraydi?", a: ["Xorazm", "Navoiy", "Qoraqalpog'iston", "Buxoro"], correct: 2 },
    { q: "Boshqa iqtisodiy rayonlardan farqli, Quyi Amudaryoda qaysi ekin yetishtirish salmog'i yuqori?", a: ["Pilla", "Sholi", "Gilos", "Yong'oq"], correct: 1 },
    { q: "Hozirgi vaqtda mintaqada qaysi qazilma boylik turi ajralib turadi?", a: ["Ko'mir", "Mis va Oltin", "Tabiiy gaz va neft", "Temir"], correct: 2 }
];

const CITIES = [
    { id: 0, name: "Urganch", coords: [41.5500, 60.6333], hint: "Xorazm viloyati markazi" },
    { id: 1, name: "Nukus", coords: [42.4619, 59.6166], hint: "Qoraqalpog'iston poytaxti" },
    { id: 2, name: "Xiva", coords: [41.3783, 60.3639], hint: "Tarixiy obidalar shahri" },
    { id: 3, name: "To'rtko'l", coords: [41.5552, 61.0003], hint: "Qoraqalpog'iston janubidagi shahar" }
];

let TEAMS = [];
let map;
let teamMarkers = [];
let cityMarkers = [];
let routingControl = null;
let currentRoute = null;

let isMusicPlaying = false;
let gamePhase = 1; // 1 = Qualifiers, 2 = Final, 3 = Game Over

let activeTeamId = 0;
let teamState = {}; // id -> { alive, steps: 0, targetId, questions: [] }
let globalQuestionBank = [];

const UI = {
    init: () => {
        document.getElementById('btn-start-quiz').classList.add('hidden');
        document.getElementById('quiz-interface').classList.add('hidden');
        UI.refreshAll();
    },

    showEventModal: (title, message, callback) => {
        const overlay = document.createElement('div');
        overlay.className = 'event-modal-overlay';
        overlay.innerHTML = `
            <div class="event-modal">
                <h2>${title}</h2>
                <p>${message}</p>
                <button id="event-modal-btn">Davom etish</button>
            </div>
        `;
        document.body.appendChild(overlay);
        document.getElementById('event-modal-btn').onclick = () => {
            overlay.remove();
            if(callback) callback();
        };
    },

    showVictoryModal: (rankings) => {
        const overlay = document.createElement('div');
        overlay.className = 'victory-overlay';

        let listHtml = '';
        rankings.forEach((r, idx) => {
            let cls = idx === 0 ? 'gold' : (idx === 1 ? 'silver' : 'bronze');
            let medal = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : '🥉');
            listHtml += `
            <li class="rank-item ${cls}">
                <span class="rank-pos">${medal}</span>
                <div class="rank-info">
                    <span class="rank-name">${r.name}</span>
                    <div class="rank-stats">Qadamlar (Umumiy): ${r.totalSteps} | ✅ ${r.correct} | ❌ ${r.wrong}</div>
                </div>
            </li>`;
        });

        overlay.innerHTML = `
            <div class="victory-modal">
                <h2>O'YIN TUGADI!</h2>
                <ul class="rank-list">
                    ${listHtml}
                </ul>
                <button class="restart-btn" onclick="Game.restart()">Qayta boshlash</button>
            </div>
        `;
        document.body.appendChild(overlay);
    },

    removeVictoryModal: () => {
        const el = document.querySelector('.victory-overlay');
        if (el) el.remove();
    },

    selectTeam: (id) => {
        if (document.body.classList.contains('animating')) return;
        
        let targetId = activeTeamId;
        // User clicks on group 1/2/3/4 button directly.
        // We only allow selecting them to trigger THEIR turn manually if needed, 
        // but normally nextTurn handles it. 
        if (!teamState[id] || !teamState[id].alive) {
            alert("Bu guruh hozir harakatlana olmaydi yoki o'yindan chiqqan.");
            return;
        }
        
        Game.switchTeam(id);
    },

    toggleMusic: () => {
        const audio = document.getElementById('bg-music');
        if (isMusicPlaying) {
            audio.pause(); document.getElementById('music-toggle').innerText = "🎵 Musiqa: OFF";
        } else {
            audio.volume = 0.3; audio.play().catch(console.warn); document.getElementById('music-toggle').innerText = "🎵 Musiqa: ON";
        }
        isMusicPlaying = !isMusicPlaying;
    },

    toggleFullscreen: () => {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(console.warn);
        else if (document.exitFullscreen) document.exitFullscreen();
    },

    refreshAll: () => {
        UI.updateActivePanel();
        UI.updateStatsTable();
        UI.updateFooterControls();
    },

    updateFooterControls: () => {
        document.querySelectorAll('.team-btn').forEach((btn, idx) => {
            if (idx === activeTeamId) btn.classList.add('active');
            else btn.classList.remove('active');
            
            if (teamState[idx] && !teamState[idx].alive) {
                btn.style.opacity = '0.3';
            } else {
                btn.style.opacity = '1';
            }
        });
    },

    updateActivePanel: () => {
        if (gamePhase === 3) return; // game over
        const team = TEAMS[activeTeamId];
        document.getElementById('active-team-display').innerText = team.name;
        document.getElementById('active-team-display').style.color = team.color;

        const missionText = document.getElementById('mission-text');
        
        let tState = teamState[activeTeamId];
        if (tState && tState.alive) {
            let targetCity = CITIES.find(c => c.id === tState.targetId);
            if (gamePhase === 1) {
                missionText.innerHTML = `BOSQICH 1: <b style="color:#d35400;">${targetCity.name} (${targetCity.hint})</b> sari qadam tashlang.`;
            } else if (gamePhase === 2) {
                missionText.innerHTML = `FINAL: <b style="color:#d35400;">${targetCity.name}</b> sari qadam tashlang!`;
            }
        } else {
            missionText.innerHTML = `<span style="color:red">Guruh imkoniyatni boy bergan!</span>`;
        }
    },

    updateStatsTable: () => {
        const tbody = document.getElementById('stats-body');
        tbody.innerHTML = '';

        TEAMS.forEach(team => {
            const isActive = (team.id === activeTeamId);
            const tState = teamState[team.id];
            
            const tr = document.createElement('tr');
            if (isActive) tr.className = 'row-active';
            if (tState && !tState.alive) tr.style.opacity = '0.5';

            let steps = tState ? tState.steps : 0;
            let correct = tState ? tState.correct : 0;
            let wrong = tState ? tState.wrong : 0;

            tr.innerHTML = `
                <td style="color:${team.color}; font-weight:bold;">${team.name} ${tState && !tState.alive ? ' (Chiqdi)' : ''}</td>
                <td>${steps} / 5</td>
                <td style="color:#27ae60; font-weight:bold;">${correct}</td>
                <td style="color:#c0392b; font-weight:bold;">${wrong}</td>
            `;
            tbody.appendChild(tr);
        });
    },

    showNotification: (msg) => {
        const el = document.getElementById('last-message');
        el.innerHTML = msg;
        const area = document.getElementById('notification-area');
        area.style.backgroundColor = "#e8f8f5";
        setTimeout(() => area.style.backgroundColor = "white", 300);
    },

    showStartButton: () => document.getElementById('btn-start-quiz').classList.remove('hidden'),
    hideStartButton: () => document.getElementById('btn-start-quiz').classList.add('hidden')
};

const Game = {
    init: () => {
        map = L.map('map').setView([41.9, 60.3], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        fetch('QuyiAmudaryoIqtisodiyUmumiy.geojson').then(r => r.ok ? r.json() : null).then(d => {
            if (d) L.geoJSON(d, { style: { color: '#8e44ad', weight: 4, fillColor: '#9b59b6', fillOpacity: 0.1 } }).addTo(map);
        }).catch(console.warn);

        Game.setupLogic();
        Game.renderMarkers();
        Game.switchTeam(0);
    },

    setupLogic: () => {
        TEAMS = [
            { id: 0, name: "Guruh 1", color: "#e74c3c", pos: CITIES[0].coords.slice(), startCity: 0, iconClass: 'team-1-marker' },
            { id: 1, name: "Guruh 2", color: "#3498db", pos: CITIES[1].coords.slice(), startCity: 1, iconClass: 'team-2-marker' },
            { id: 2, name: "Guruh 3", color: "#2ecc71", pos: CITIES[2].coords.slice(), startCity: 2, iconClass: 'team-3-marker' },
            { id: 3, name: "Guruh 4", color: "#f39c12", pos: CITIES[3].coords.slice(), startCity: 3, iconClass: 'team-4-marker' }
        ];

        globalQuestionBank = [...QUESTIONS_DB].sort(() => Math.random() - 0.5);

        // Phase 1 Rules
        // G1 targets G2's city, G2 targets G1's city
        // G3 targets G4's city, G4 targets G3's city
        teamState = {};
        for (let i = 0; i < 4; i++) {
            teamState[i] = {
                alive: true,
                steps: 0,
                totalSteps: 0,
                correct: 0,
                wrong: 0,
                targetId: (i === 0) ? 1 : (i === 1) ? 0 : (i === 2) ? 3 : 2,
                questions: globalQuestionBank.splice(0, 5) // Assign 5 random questions
            };
        }
        gamePhase = 1;

        if (routingControl) { map.removeControl(routingControl); routingControl = null; currentRoute = null; }
    },

    renderMarkers: () => {
        teamMarkers.forEach(m => map.removeLayer(m));
        cityMarkers.forEach(c => map.removeLayer(c.marker));
        teamMarkers = [];
        cityMarkers = [];

        CITIES.forEach(loc => {
            let icon = L.divIcon({ className: 'target-marker-icon', iconSize: [25, 25] });
            let m = L.marker(loc.coords, { icon, zIndexOffset: -100 }).addTo(map);
            m.bindTooltip(loc.name, { permanent: true, direction: 'right', offset: [15, 0], className: 'city-label' });
            cityMarkers.push({ id: loc.id, marker: m, data: loc });
        });

        TEAMS.forEach(team => {
            let icon = L.divIcon({ className: `team-icon ${team.iconClass}`, html: team.id + 1, iconSize: [35, 35] });
            let m = L.marker(team.pos, { icon, zIndexOffset: 1000 }).addTo(map);
            teamMarkers.push(m);
        });
    },

    ensureMusic: () => { if (!isMusicPlaying && document.getElementById('bg-music').paused) UI.toggleMusic(); },

    switchTeam: (id) => {
        activeTeamId = id;
        UI.hideStartButton();
        document.getElementById('quiz-interface').classList.add('hidden');

        UI.refreshAll();
        const team = TEAMS[id];
        map.panTo(team.pos);

        if (teamState[id] && teamState[id].alive) {
            UI.showNotification(`${team.name} navbati.`);
            
            // Draw route to their target
            let tCity = CITIES.find(c => c.id === teamState[id].targetId);
            Game.drawRoute(team.pos, tCity.coords, team.color, true);
        } else {
            // Next immediately
            Game.nextTurn();
        }
    },

    drawRoute: (start, end, color, showBtn) => {
        if (routingControl) map.removeControl(routingControl);
        routingControl = L.Routing.control({
            waypoints: [L.latLng(start), L.latLng(end)],
            router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }),
            lineOptions: { styles: [{ color, opacity: 0.8, weight: 6, dashArray: "10,10" }] },
            createMarker: () => null, show: false, addWaypoints: false, fitSelectedRoutes: false
        }).addTo(map);

        routingControl.on('routesfound', (e) => {
            currentRoute = e.routes[0];
            if (showBtn) {
                UI.showStartButton();
            }
        });
    },

    startQuizSequence: () => {
        Game.ensureMusic();
        UI.hideStartButton();
        const tState = teamState[activeTeamId];

        // Ensure questions exist
        if (tState.questions.length === 0) {
            // Recycle from global if exhausted
            tState.questions = [...QUESTIONS_DB].sort(() => Math.random() - 0.5).slice(0, 5);
        }

        const q = tState.questions.shift(); // take one question out

        const iface = document.getElementById('quiz-interface');
        iface.classList.remove('hidden');
        document.getElementById('question-text').innerText = q.q;

        const opts = document.getElementById('options-container');
        opts.innerHTML = '';
        q.a.forEach((txt, idx) => {
            let btn = document.createElement('button');
            btn.innerText = txt;
            btn.onclick = () => Game.submitAnswer(idx === q.correct);
            opts.appendChild(btn);
        });

        document.getElementById('timer-text').innerText = `Masofa: ${tState.steps} / 5 qadam`;
    },

    submitAnswer: (isCorrect) => {
        document.getElementById('quiz-interface').classList.add('hidden');
        const tState = teamState[activeTeamId];

        if (!isCorrect) {
            tState.wrong++;
            UI.refreshAll();
            UI.showNotification(`<span style='color:red'>Xato! Navbat kutish.</span>`);
            alert("Noto'g'ri javob!");
            Game.nextTurn();
        } else {
            tState.correct++;
            UI.refreshAll();
            UI.showNotification(`<span style='color:green'>To'g'ri! 1 qadam siljidingiz.</span>`);
            Game.executeStep();
        }
    },

    executeStep: () => {
        if (!currentRoute) return;
        document.body.classList.add('animating');

        const tState = teamState[activeTeamId];
        const team = TEAMS[activeTeamId];
        const marker = teamMarkers[activeTeamId];
        const coords = currentRoute.coordinates;

        // Route distance divided into segments based on remaining steps
        // If they need 5 steps total, and they just answered 1 correct, they move 1 piece of the track.
        // Actually, to make it perfectly reach the end after exactly 5 steps total:
        let totalStepsNeeded = 5;
        let startStep = tState.steps; 
        tState.steps += 1;
        tState.totalSteps += 1;
        let endStep = tState.steps;

        let totalPoints = coords.length;
        let startIndex = Math.floor((startStep / totalStepsNeeded) * (totalPoints - 1));
        let endIndex = Math.floor((endStep / totalStepsNeeded) * (totalPoints - 1));
        
        let i = startIndex;

        const tick = setInterval(() => {
            if (i >= endIndex) {
                clearInterval(tick); Game.finishStep(); return;
            }
            marker.setLatLng(coords[i]); map.panTo(coords[i]); i++;
        }, 15);
    },

    finishStep: () => {
        document.body.classList.remove('animating');
        const tState = teamState[activeTeamId];
        const team = TEAMS[activeTeamId];

        // Update real position
        let lastLoc = teamMarkers[activeTeamId].getLatLng();
        team.pos = [lastLoc.lat, lastLoc.lng];
        UI.refreshAll();

        if (tState.steps >= 5) {
            Game.handleDuelWin(activeTeamId);
        } else {
            Game.nextTurn();
        }
    },

    handleDuelWin: (winnerId) => {
        const team = TEAMS[winnerId];
        const tState = teamState[winnerId];
        let loserId = -1;

        if (gamePhase === 1) {
            // Find who they eliminated
            if (winnerId === 0 && teamState[1].alive) loserId = 1;
            else if (winnerId === 1 && teamState[0].alive) loserId = 0;
            else if (winnerId === 2 && teamState[3].alive) loserId = 3;
            else if (winnerId === 3 && teamState[2].alive) loserId = 2;

            if (loserId !== -1) {
                teamState[loserId].alive = false;
                UI.showEventModal("TABRIKLAYMIZ!", `${team.name} raqib hududiga birinchi bo'lib yetib keldi.<br><br>${TEAMS[loserId].name} o'yindan chiqdi.`, () => {
                    Game.checkPhase1End();
                });
                return;
            }

            Game.checkPhase1End();
        } else if (gamePhase === 2) {
            // Final win
            UI.showEventModal("MUTLAQ G'OLIB", `O'yin yakunlandi!<br><br>G'olib: ${team.name}! Ular final manziliga birinchi bo'lib yetib kelishdi.`, () => {
                Game.handleUltimateVictory();
            });
        }
    },

    checkPhase1End: () => {
        let aliveCount = 0;
        let aliveIds = [];
        for (let i = 0; i < 4; i++) {
            if (teamState[i].alive) { aliveCount++; aliveIds.push(i); }
        }

        if (aliveCount <= 2 && aliveIds.length === 2 && 
           ((aliveIds.includes(0)||aliveIds.includes(1)) && (aliveIds.includes(2)||aliveIds.includes(3)))) {
            // Time for Phase 2
            UI.showEventModal("FINAL BOSQICHI", `Barcha saralash o'yinlari tugadi!<br><br>FINAL: ${TEAMS[aliveIds[0]].name} vs ${TEAMS[aliveIds[1]].name}.`, () => {
                Game.startPhase2(aliveIds[0], aliveIds[1]);
            });
        } else {
            Game.nextTurn();
        }
    },

    startPhase2: (w1, w2) => {
        gamePhase = 2;
        
        // Setup new targets (head towards each other's current location)
        let w1_current_city = teamState[w1].targetId;
        let w2_current_city = teamState[w2].targetId;

        teamState[w1].targetId = w2_current_city;
        teamState[w2].targetId = w1_current_city;

        // Reset steps
        teamState[w1].steps = 0;
        teamState[w2].steps = 0;

        // Refill Questions
        teamState[w1].questions = globalQuestionBank.splice(0, 5);
        if (teamState[w1].questions.length < 5) teamState[w1].questions = [...QUESTIONS_DB].sort(() => Math.random() - 0.5).slice(0, 5);
        
        teamState[w2].questions = globalQuestionBank.splice(0, 5);
        if (teamState[w2].questions.length < 5) teamState[w2].questions = [...QUESTIONS_DB].sort(() => Math.random() - 0.5).slice(0, 5);

        UI.refreshAll();
        Game.switchTeam(w1);
    },

    handleUltimateVictory: () => {
        gamePhase = 3;
        UI.refreshAll();

        let rankings = [];
        // Calculate rankings
        let rankList = [0, 1, 2, 3];
        rankList.sort((a, b) => {
            let A = teamState[a];
            let B = teamState[b];
            
            // Alive first
            if (A.alive !== B.alive) return B.alive ? 1 : -1;
            
            // Steps total
            if (A.totalSteps !== B.totalSteps) return B.totalSteps - A.totalSteps;
            
            // Correct answers
            return B.correct - A.correct;
        });

        rankList.forEach(id => {
            rankings.push({
                name: TEAMS[id].name,
                totalSteps: teamState[id].totalSteps,
                correct: teamState[id].correct,
                wrong: teamState[id].wrong
            });
        });

        UI.showVictoryModal(rankings);
    },

    nextTurn: () => {
        if (gamePhase === 3) return;
        setTimeout(() => {
            let loopGuard = 0;
            let n = activeTeamId;
            do {
                n = (n + 1) % 4;
                loopGuard++;
            } while (!teamState[n].alive && loopGuard < 5);

            if (loopGuard >= 5 || !teamState[n].alive) {
                // Game actually over
                Game.handleUltimateVictory();
            } else {
                Game.switchTeam(n);
            }
        }, 1200);
    },

    restart: () => {
        UI.removeVictoryModal();
        TEAMS.forEach((t, i) => {
            t.pos = CITIES[i].coords.slice();
        });
        Game.setupLogic();
        Game.renderMarkers();
        Game.switchTeam(0);
        UI.showNotification("O'yin qayta boshlandi!");
    }
};

// CSS Injection for City Labels
const style = document.createElement('style');
style.innerHTML = `
    .city-label {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #34495e;
        color: #2c3e50;
        font-weight: bold;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => { Game.init(); UI.init(); });
window.UI = UI; window.Game = Game;
