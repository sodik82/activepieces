import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FlagService,
  PlatformProjectService,
  ProjectSelectors,
} from '@activepieces/ui/common';
import { Observable, switchMap, map } from 'rxjs';
import { ApFlagId, ProjectWithLimits } from '@activepieces/shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-project-switcher',
  templateUrl: './project-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSwitcherComponent {
  currentProject$: Observable<ProjectWithLimits>;
  areProjectsEnabled$: Observable<boolean>;
  projects$: Observable<ProjectWithLimits[]>;
  switchProject$?: Observable<void>;
  constructor(
    private store: Store,
    private flagService: FlagService,
    private projectService: PlatformProjectService
  ) {
    this.currentProject$ = this.store.select(
      ProjectSelectors.selectCurrentProject
    );
    this.projects$ = this.store.select(ProjectSelectors.selectAllProjects);
    this.areProjectsEnabled$ = this.flagService
      .isFlagEnabled(ApFlagId.PROJECT_MEMBERS_ENABLED)
      .pipe(
        switchMap((enabled) => {
          return this.projects$.pipe(
            map((projects) => {
              return projects.length > 0 && enabled;
            })
          );
        })
      );
  }
  switchProject(projectId: string) {
    this.switchProject$ = this.projectService.switchProject({
      projectId,
      redirectHome: true,
      refresh: true,
    });
  }
}
