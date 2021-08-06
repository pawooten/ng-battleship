import { GameStateService } from './game-state-service';
import { PlayerType } from '../classes/enumerations';

describe('UserPreferenceService', () => {
  it('should instantiate the service', () => {
    const service = new GameStateService();
    expect(service).toBeTruthy();
  });

  it('should initialize to PlayerType.PlayerOne', done => {
    const service = new GameStateService();
    service.playerType$.subscribe( result => {
      expect(result).toEqual(PlayerType.PlayerOne);
      done();
    });
  });
});
