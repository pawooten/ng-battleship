import { UserPreferenceService } from './user-preference-service';
import { CellSize } from '../classes/enumerations';

describe('UserPreferenceService', () => {
  it('should instantiate the service', () => {
    const service = new UserPreferenceService();
    expect(service).toBeTruthy();
  });

  it('should initialize player name to Paul', done => {
    const service = new UserPreferenceService();
    service.playerName$.subscribe( result => {
      expect(result).toEqual('Paul');
      done();
    });
  });

  it('should initialize cell size to medium', done => {
    const service = new UserPreferenceService();
    service.cellSize$.subscribe( cellSize => {
      expect(cellSize).toEqual(CellSize.Medium);
      done();
    });
  });
});
