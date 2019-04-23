export function formatDate(value) {
  return value ? value.split('T')[0].split('-').join('.') : '0000.00.00';
}
