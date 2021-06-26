import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: 0 | 1 | 2 | 3 | 4;
}

enum SkillCategory {
  LANGUAGES = 'Languages',
  FRAMEWORKS = 'Frameworks',
  TOOLS = 'Tools',
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillOrdering = [SkillCategory.LANGUAGES, SkillCategory.FRAMEWORKS, SkillCategory.TOOLS];
  skillCategories: {
    [category: string]: Skill[];
  } = {
      [SkillCategory.LANGUAGES]: [
        {
          name: 'Typescript',
          level: 4
        },
        {
          name: 'Javascript',
          level: 3
        },
        {
          name: 'HTML',
          level: 3
        },
        {
          name: 'CSS',
          level: 3
        },
        {
          name: 'C#',
          level: 2
        },
        {
          name: 'Python',
          level: 1
        }
    ],
    [SkillCategory.FRAMEWORKS]: [
      {
        name: 'Angular',
        level: 4
      },
      {
        name: 'AngularJS',
        level: 4
      },
      {
        name: 'Jasmine',
        level: 4
      },
      {
        name: '.NET Framework',
        level: 3
      },
      {
        name: 'Node.js',
        level: 2
      },
      {
        name: 'Stencil.js',
        level: 2
      },
      {
        name: 'Jest',
        level: 1
      },
      {
        name: 'Storybook',
        level: 1
      }
    ],
    [SkillCategory.TOOLS]: [
      {
        name: 'Git',
        level: 4
      },
      {
        name: 'Yarn',
        level: 3
      },
      {
        name: 'NPM',
        level: 3
      },
      {
        name: 'Webpack',
        level: 2
      },
      {
        name: 'Rush',
        level: 2
      }
  ]
  };

  constructor() { }

  ngOnInit() {
  }

}
