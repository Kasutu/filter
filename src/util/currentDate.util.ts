export default class CurrentDate {
  public currentDate(): string {
    return new Date().toLocaleDateString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
  }
}
