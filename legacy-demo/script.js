/**
 * Tactile Design System v1.0
 * Logic for interactive components
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initTabs();
    initModals();
    initCopyButtons();
});

/* --- THEME TOGGLE --- */
function initThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'tac-btn tac-btn-secondary fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0 shadow-xl';
    toggle.innerHTML = '<i class="ph-bold ph-moon text-xl"></i>';
    toggle.setAttribute('aria-label', 'Toggle Dark Mode');
    
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            toggle.innerHTML = '<i class="ph-bold ph-moon text-xl"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggle.innerHTML = '<i class="ph-bold ph-sun text-xl"></i>';
        }
    });
}

/* --- TABS --- */
function initTabs() {
    const tabGroups = document.querySelectorAll('.tac-tabs');
    
    tabGroups.forEach(group => {
        const triggers = group.querySelectorAll('.tab-trigger');
        const contents = group.parentElement.querySelectorAll('.tab-content');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                // Remove active states
                triggers.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.add('hidden'));
                
                // Add active state
                trigger.classList.add('active');
                const targetId = trigger.getAttribute('data-target');
                document.getElementById(targetId).classList.remove('hidden');
            });
        });
    });
}

/* --- MODALS --- */
function initModals() {
    const triggers = document.querySelectorAll('[data-modal-target]');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) openModal(modal);
        });
    });

    // Close on backdrop click
    document.querySelectorAll('.tac-modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal(backdrop.parentElement);
        });
    });
}

function openModal(modal) {
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => modal.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('open');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300); // Match transition duration
}

/* --- COPY CODE --- */
function initCopyButtons() {
    const snippets = document.querySelectorAll('.code-snippet');
    
    snippets.forEach(snippet => {
        const button = document.createElement('button');
        button.className = 'absolute top-2 right-2 p-2 text-slate-500 hover:text-blue-600 transition-colors';
        button.innerHTML = '<i class="ph-bold ph-copy"></i>';
        button.title = 'Copiar código';
        
        snippet.style.position = 'relative';
        snippet.appendChild(button);

        button.addEventListener('click', () => {
            const code = snippet.querySelector('code').innerText;
            navigator.clipboard.writeText(code);
            
            // Feedback
            const originalIcon = button.innerHTML;
            button.innerHTML = '<i class="ph-bold ph-check text-green-600"></i>';
            setTimeout(() => button.innerHTML = originalIcon, 2000);
        });
    });
}
