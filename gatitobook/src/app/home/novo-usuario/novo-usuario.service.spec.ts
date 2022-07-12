import { TestBed } from '@angular/core/testing';

import { NovoUsuarioService } from './novo-usuario.service';

describe('NovoUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovoUsuarioService = TestBed.get(NovoUsuarioService);
    expect(service).toBeTruthy();
  });
});
