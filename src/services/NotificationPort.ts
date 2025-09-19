// Interface for scheduling local notifications

export interface NotificationPort {
  /** Schedules a notification at the given time. */
  scheduleNotification(at: number, title: string, body: string): Promise<void>;
  /** Cancels all scheduled notifications. */
  cancelAll(): Promise<void>;
}
