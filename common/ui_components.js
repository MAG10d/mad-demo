// FoodConnect 通用 UI 組件

// Toast 通知組件
function showToast(message, type = 'success') {
  // 移除舊的 toast
  const oldToast = document.getElementById('app-toast');
  if (oldToast) oldToast.remove();

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-amber-500',
    info: 'bg-blue-500'
  };

  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info'
  };

  const toast = document.createElement('div');
  toast.id = 'app-toast';
  toast.className = `fixed bottom-24 left-4 right-4 ${colors[type]} text-white px-4 py-3 rounded-2xl shadow-2xl z-50 max-w-md mx-auto transform translate-y-0 transition-all duration-300 flex items-center gap-3`;
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">${icons[type]}</span>
    <span class="flex-1 font-medium">${message}</span>
  `;

  document.body.appendChild(toast);

  // 3秒後自動消失
  setTimeout(() => {
    toast.classList.add('translate-y-32', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 確認對話框組件
function showConfirm(title, message, onConfirm, onCancel) {
  const modal = document.createElement('div');
  modal.id = 'confirm-modal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="absolute inset-0 bg-black/50" onclick="closeConfirmModal()"></div>
    <div class="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-sm w-full p-6 transform scale-95 transition-transform duration-200">
      <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">${title}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 whitespace-pre-line">${message}</p>
      <div class="flex gap-3">
        <button onclick="closeConfirmModal(); ${onCancel || ''}" class="flex-1 py-3 px-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          取消
        </button>
        <button onclick="closeConfirmModal(); ${onConfirm}" class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-lg transition-all">
          確認
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => {
    modal.querySelector('.relative').classList.remove('scale-95');
    modal.querySelector('.relative').classList.add('scale-100');
  }, 10);
}

function closeConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  if (modal) {
    modal.querySelector('.relative').classList.add('scale-95');
    setTimeout(() => modal.remove(), 200);
  }
}

// 成功對話框（單按鈕）
function showSuccess(title, message, buttonText = '知道了', onClose) {
  const modal = document.createElement('div');
  modal.id = 'success-modal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="absolute inset-0 bg-black/50" onclick="closeSuccessModal(${onClose})"></div>
    <div class="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-sm w-full p-6 transform scale-95 transition-transform duration-200">
      <div class="text-center mb-4">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span class="material-symbols-outlined text-green-600 text-4xl" style="font-variation-settings: 'FILL' 1">check_circle</span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">${title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">${message}</p>
      </div>
      <button onclick="closeSuccessModal(${onClose})" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-lg transition-all">
        ${buttonText}
      </button>
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => {
    modal.querySelector('.relative').classList.remove('scale-95');
    modal.querySelector('.relative').classList.add('scale-100');
  }, 10);
}

function closeSuccessModal(callback) {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.querySelector('.relative').classList.add('scale-95');
    setTimeout(() => {
      modal.remove();
      if (callback && typeof callback === 'function') callback();
    }, 200);
  }
}



