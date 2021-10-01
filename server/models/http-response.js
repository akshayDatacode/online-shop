class HttpResponse  {
  constructor(message, code) {
    this.message = message; // Add a "message" property
    this.code = code; // Adds a "code" property
  }
}
  
module.exports = HttpResponse;