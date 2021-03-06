class Rank {
  static io;

  get() {
    // Get ranking
    console.error("[!] Calling abstract method");
  }

  sort() {
    // Sort ranking
    console.error("[!] Calling abstract method");
  }

  update() {
    // Update data
    console.error("[!] Calling abstract method");
  }

  log = (args) => {
    console.log(args);
  }

  logError = (args) => {
    let d = new Date();
    console.error(`[${d.toLocaleDateString()}, ${d.toLocaleTimeString()}] [!]`, args);
  }

  constructor() {
    this.lastUpdate = 0;
    this.timeUsage = 0;
    this.running = false;
  }
}


module.exports = Rank; 
