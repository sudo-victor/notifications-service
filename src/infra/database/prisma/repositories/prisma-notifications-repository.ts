import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository extends NotificationsRepository {
  constructor(private prismaService: PrismaService) {
    super();
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }

  findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
