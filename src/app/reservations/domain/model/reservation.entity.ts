export class Reservation {
  constructor(
    public id: string,
    public outdoorCenterId:    number,
    public activityType:       string,
    public participantName:    string,
    public participants:       number,
    public weatherTemperature: number,
    public reservedAt:         string,
    ) {}
}
