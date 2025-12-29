// Google Apps Script for ParkHere Email Collection
// This script receives email submissions from your website and stores them in Google Sheets

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Extract email and timestamp
    var email = data.email;
    var timestamp = data.timestamp || new Date().toISOString();
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Invalid email address'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if email already exists
    var existingEmails = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
    for (var i = 0; i < existingEmails.length; i++) {
      if (existingEmails[i][0] === email) {
        return ContentService.createTextOutput(JSON.stringify({
          'status': 'duplicate',
          'message': 'This email is already registered'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Add new row with email and timestamp
    sheet.appendRow([email, timestamp, 'Pending']);
    
    // Optional: Send confirmation email
    // sendConfirmationEmail(email);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Email successfully registered'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'ok',
    'message': 'ParkHere Email Collection API is running'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Email validation function
function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Optional: Send confirmation email to subscriber
function sendConfirmationEmail(email) {
  var subject = "Welcome to ParkHere - You're on the List! 🎉";
  var body = `
    Hi there!
    
    Thank you for signing up to be notified about ParkHere's launch!
    
    You're now on our exclusive early access list and will be among the first to know when we go live.
    
    What to expect:
    ✅ Early bird launch notification
    ✅ Exclusive launch offers
    ✅ First access to premium features
    
    We're working hard to revolutionize parking, and we can't wait to share it with you!
    
    Best regards,
    The ParkHere Team
    
    ---
    If you didn't sign up for this, please ignore this email.
  `;
  
  try {
    MailApp.sendEmail(email, subject, body);
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
  }
}
