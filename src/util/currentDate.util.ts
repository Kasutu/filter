export default function currentDate() {
  return new Date().toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
}
