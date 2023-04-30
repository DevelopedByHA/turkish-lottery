const body = typeof window !== 'undefined' ? document.body : undefined;

export function removeLock() {
  if (body) {
    body.style.overflow = 'auto';
  }
}

export function addLock() {
  if (body) {
    body.style.overflow = 'hidden';
  }
}

export function isLocked() {
  return body && body.style.overflow === 'hidden';
}

export function toggleLock() {
  isLocked() ? removeLock() : addLock();
}
