// Admin configuration - easily editable
// Add or remove admin emails here

export const ADMIN_EMAILS = [
  'admin@kuwaitindiads.com',
  'yourname@gmail.com'
  // Add more admin emails as needed
];

// Check if email is admin
export const isAdminEmail = (email) => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
};
