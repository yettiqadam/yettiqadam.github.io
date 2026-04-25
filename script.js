/**
 * YETTI QADAM
 * Logic: 2 Teams, Duel format, 7 step distance
 */

const QUESTIONS_DB = [
  {
    q: "Quyi Amudaryo iqtisodiy rayoni O’zbekistonning qaysi qismida joylashgan?",
    a: ["Shimolida", "G'arbida", "Sharqida", "Shimoli-g'arbida"],
    correct: 3
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayonining qanday yerlarida aholi qadimdan zich yashab kelgan?",
    a: ["Lalmikor", "Obikor", "Daryo bo'ylarida", "Vodiylarida"],
    correct: 1
  },
  {
    q: "Tabiiy tafovutlar natijasida Quyi Amudaryo iqtisodiy rayoni aholi zichligi ……….. tomon kamayib boradi?",
    a: ["Rayonning janubiga", "Orol dengizi", "Tog'larga", "Shaharlar markazi tomon"],
    correct: 1
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoning qaysi shaharlarida o’sish va qishloqlarda kichik biznes va tadbirkorlikning rivojlanishi hisobiga shaharchalarning vujudga kelishi natijasida shahar aholisi tobora ko’payib bormoqda? (1.Nukus 2.Chimboy 3.Urganch 4.Mo’ynoq 5.Taxiatosh 6.Xo’jayli)",
    a: ["1, 3, 5", "1, 2, 5, 6", "1, 2, 3, 4, 6", "Hammasi"],
    correct: 3
  },
  {
    q: "O’zbekistondagi qishloq xo’jaligiga yaroqli yerlarning necha % ushbu rayon hissasiga to’g’ri keladi?",
    a: ["3%", "5%", "6%", "12%"],
    correct: 2
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoning qishloq xo’jaligida foydalaniladigan yerlarning necha % yaylovlardan iborat xisoblanadi?",
    a: ["15%", "50%", "75%", "90%"],
    correct: 3
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoni aholisi qishloq xo’jaligida quyidagilardan qaysi tarmoq bilan shug’ullanmaydi?",
    a: ["Pillachilik", "Sholichilik", "Kanobchilik", "Qorako'lchilik"],
    correct: 2
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoni mamlakatda yetishtirilayotgan sholining qancha qismini beradi?",
    a: ["Deyarli hammasini", "Yarmidan ko'pini", "25%", "1/3 qismini"],
    correct: 1
  },
  {
    q: "Iqtisodiy rayonning paxtachilik bilan birga rivojlanayotgan tarmog’i?",
    a: ["Pillachilik", "Sholichilik", "Kanobchilik", "Qorako'lchilik"],
    correct: 2
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoning to’qaylarida qaysi hayvon boqiladi?",
    a: ["Qorako'l qo'ylari", "Yilqi", "Ondatra", "Baliq"],
    correct: 1
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoni yengil sanoatida qaysi sanoat korxonalarining salmag’i katta?",
    a: ["Tekstil korxonalari", "Paxta tozalash", "Qurilish mollari", "Mashinasozlik"],
    correct: 1
  },
  {
    q: "Energetika tanqisligini bartaraf etish uchun Taxiatosh IES va tarkibida GES bo’lgan ……………. Gidrouzel barpo etildi.",
    a: ["Taxiatosh", "Tuyamo'yin", "Mo'ynoq", "Qo'ng'irot"],
    correct: 1
  },
  {
    q: "Iqtisodiy rayonda O’rta Osiyoda yagona bo’lgan soda zavodi?",
    a: ["Taxiatosh", "Tuyamo'yin", "Mo'ynoq", "Qo'ng'irot"],
    correct: 3
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayonida Navoiy-Nukusni bog’laydigan temiryo’lning uzunligi?",
    a: ["125 km", "250 km", "345 km", "100 km"],
    correct: 2
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayonida milliy avtomagistral qurilishida ro’y bergan ulkan voqealardan biri …………… shahriga kiraverishdagi yangi ko’prik va chorraha yo’lining qurilishi?",
    a: ["Urganch", "Nukus", "Mo'ynoq", "Qo'ng'irot"],
    correct: 1
  },
  {
    q: "Iqtisodiy rayondagi gaz-kimyo majmuasiga gazni taqsimlaydigan zavod qayerda joylashgan?",
    a: ["Qo'ng'irotda", "Nukusda", "Ustyurtda", "Xo'jaylida"],
    correct: 2
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayonida yuksalib rivojlanayotgan transport turlari?",
    a: ["Avtomobil va temiryo'l", "Avtomobil va suv transporti", "Suv va havo transporti", "Temir yo'l va havo transporti"],
    correct: 0
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoni qaysi viloyatlarni o’z ichiga oladi?",
    a: ["Qoraqalpog'iston Res va Navoiy vil", "Xorazm vil va Navoiy vil", "Qoraqalpog'iston Res va Xorazm vil", "Buxoro vil va Navoiy vil"],
    correct: 2
  },
  {
    q: "Quyi Amudaryo iqtisodiy rayoning qaysi xududlarida yil bo’yi qorako’l qo’ylari boqiladi?",
    a: ["Cho'l yaylovlarida", "To'qaylarda", "Daryo bo'ylarida", "Sho'rxok yerlarda"],
    correct: 0
  },
  {
    q: "Quyidagilardan qaysi korxonalar yengil sanoat korxonalari hisoblanadi?",
    a: ["Navoiy va Nukus", "Elteks va Kateks", "UzEllas va Urganch", "Ustyurt va Xo'jayli"],
    correct: 1
  }
];

const CITIES = [
    { id: 0, name: "Urganch", coords: [41.5500, 60.6333], hint: "Xorazm viloyati markazi" },
    { id: 1, name: "Nukus", coords: [42.4619, 59.6166], hint: "Qoraqalpog'iston poytaxti" }
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
let questionTimer = null;
let timeLeft = 60;

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
            if (callback) callback();
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
                <td>${steps} / 7</td>
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
            { id: 1, name: "Guruh 2", color: "#3498db", pos: CITIES[1].coords.slice(), startCity: 1, iconClass: 'team-2-marker' }
        ];

        globalQuestionBank = [...QUESTIONS_DB];

        // Phase 1 Rules
        // G1 targets G2's city, G2 targets G1's city
        teamState = {};
        for (let i = 0; i < 2; i++) {
            teamState[i] = {
                alive: true,
                steps: 0,
                totalSteps: 0,
                correct: 0,
                wrong: 0,
                targetId: (i === 0) ? 1 : 0,
                questions: []
            };
        }

        // Team 1 (id=0): questions in forward order (index 0 → end)
        // Team 2 (id=1): questions in reverse order (last → first)
        teamState[0].questions = [...QUESTIONS_DB];
        teamState[1].questions = [...QUESTIONS_DB].reverse();

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
        if (questionTimer) clearInterval(questionTimer);
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
        if (questionTimer) clearInterval(questionTimer);
        Game.ensureMusic();
        UI.hideStartButton();
        const tState = teamState[activeTeamId];

        // Ensure questions exist
        if (tState.questions.length === 0) {
            // Recycle: team 0 in forward order, team 1 in reverse order
            tState.questions = activeTeamId === 0 ? [...QUESTIONS_DB] : [...QUESTIONS_DB].reverse();
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

        document.getElementById('timer-text').innerText = `Masofa: ${tState.steps} / 7 qadam`;

        timeLeft = 60;
        document.getElementById('countdown-timer').innerText = `Vaqt: ${timeLeft}`;

        questionTimer = setInterval(() => {
            timeLeft--;
            document.getElementById('countdown-timer').innerText = `Vaqt: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(questionTimer);
                Game.submitAnswer(false, true); // time out
            }
        }, 1000);
    },

    submitAnswer: (isCorrect, isTimeout = false) => {
        if (questionTimer) clearInterval(questionTimer);
        document.getElementById('quiz-interface').classList.add('hidden');
        const tState = teamState[activeTeamId];

        if (!isCorrect) {
            tState.wrong++;
            UI.refreshAll();
            if (isTimeout) {
                UI.showNotification(`<span style='color:red'>Vaqt tugadi! Navbat keyingi guruhga.</span>`);
                alert("Vaqt tugadi!");
            } else {
                UI.showNotification(`<span style='color:red'>Xato! Navbat kutish.</span>`);
                alert("Noto'g'ri javob!");
            }
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
        // If they need 7 steps total, and they just answered 1 correct, they move 1 piece of the track.
        // Actually, to make it perfectly reach the end after exactly 7 steps total:
        let totalStepsNeeded = 7;
        let startStep = tState.steps;
        tState.steps += 1;
        tState.totalSteps += 1;
        let endStep = tState.steps;

        let totalPoints = coords.length;

        // Since OSRM calculates the route from CURRENT position to target,
        // the currentRoute is only the REMAINING distance.
        let remainingSteps = totalStepsNeeded - startStep;
        if (remainingSteps < 1) remainingSteps = 1;

        let startIndex = 0; // Always start at the beginning of the newly generated route
        let endIndex = Math.floor((1 / remainingSteps) * (totalPoints - 1));

        if (endStep >= totalStepsNeeded) {
            endIndex = totalPoints - 1; // Force reaching the last coordinate
        }

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

        if (tState.steps >= 7) {
            Game.handleDuelWin(activeTeamId);
        } else {
            Game.nextTurn();
        }
    },

    handleDuelWin: (winnerId) => {
        const team = TEAMS[winnerId];
        // Final win for 2 teams
        UI.showEventModal("MUTLAQ G'OLIB", `O'yin yakunlandi!<br><br>G'olib: ${team.name}! Ular final manziliga birinchi bo'lib yetib kelishdi.`, () => {
            Game.handleUltimateVictory();
        });
    },

    handleUltimateVictory: () => {
        gamePhase = 3;
        UI.refreshAll();

        let rankings = [];
        // Calculate rankings
        let rankList = [0, 1];
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
                n = (n + 1) % 2;
                loopGuard++;
            } while (!teamState[n].alive && loopGuard < 3);

            if (loopGuard >= 3 || !teamState[n].alive) {
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
