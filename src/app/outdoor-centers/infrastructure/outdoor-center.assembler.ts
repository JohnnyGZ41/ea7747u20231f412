import { Service } from '@angular/core';
import {OutdoorCenterResource} from './outdoor-center.response';
import {OutdoorCenter} from '../domain/model/outdoor-center.entity';

@Service()
export class OutdoorCenterAssembler {
  toEntity(resource: OutdoorCenterResource): OutdoorCenter{
    return new OutdoorCenter(
      resource.id,
      resource.name,
      resource.activityType,
      resource.capacity,
      resource.latitude,
      resource.longitude,

    )
  }
}
