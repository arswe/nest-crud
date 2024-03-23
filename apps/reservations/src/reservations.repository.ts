import { AbstractRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';

@Injectable
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {}
