function withBoxUnlocked(body) {
    box.unlock();
    try {
        body();
    } finally {
        box.lock();
   }
}