import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions =
      [
        {
          'id': 1,
          'question': 'Szukasz towarzysza na weekend do wspólnego biegania, Twój post to:',
          'dates':
            [
              {
                'date': 'Wtorek 10:30',
                'quality': 0.05
              },
              {
                'date': 'Piątek 22:00',
                'quality': 0.95
              },
              {
                'date': 'Sobota 13:30',
                'quality': 0.55
              },
              {
                'date': 'Niedziela 19:30',
                'quality': 0.0
              }
            ],
          'contents':
            [
              {
                'content': 'Czy wśród moich znajomych jest ktoś, kto chciałby pobiegać wspólnie?',
                'quality': 0.55
              },
              {
                // tslint:disable-next-line:max-line-length
                'content': 'Czy wśród moich znajomych jest ktoś, kto chciałby pobiegać wspólnie? W grę wchodzą piątek, sobota lub niedziela :)',
                'quality': 0.8
              },
              {
                'content': 'Idę biegać w weekend!! :D ;D :)',
                'quality': 0.05
              }
            ]
        },
        {
          'id': 2,
          'question': 'Pisałeś we wtorek egzamin na studiach i nie poszedł Ci dobrze:',
          'dates':
            [
              {
                'date': 'Wtorek 18:30',
                'quality': 0.95
              },
              {
                'date': 'Piątek 22:00',
                'quality': 0.05
              },
              {
                'date': 'Środa 02:00',
                'quality': 0.35
              },
              {
                'date': 'Niedziela 19:30',
                'quality': 0.0
              }
            ],
          'contents':
            [
              {
                'content': ':(( życie jest do De',
                'quality': 0.005
              },
              {
                'content': 'Ten wykładowca to kawał #$%#$%',
                'quality': 0.1
              },
              {
                'content': 'Eh...znowu będzie poprawka :/',
                'quality': 0.75
              },
              {
                'content': 'Nie ma spiny, są drugie terminy! :D',
                'quality': 0.75
              },
              {
                'content': 'Ktoś jeszcze lubi pisać egzaminy dwa razy? :(',
                'quality': 0.55
              }
            ]
        },
        {
          'id': 3,
          'question': 'Chcesz zareklamować nową linię drzwi antywłamaniowych na profilu swojej firmy:',
          'dates':
            [
              {
                'date': 'Czwartek 11:00',
                'quality': 0.05
              },
              {
                'date': 'Sobota 22:00',
                'quality': 0.15
              },
              {
                'date': 'Niedziela 02:00',
                'quality': 0.0
              },
              {
                'date': 'Poniedziałek 20:30',
                'quality': 0.8
              },
              {
                'date': 'Środa 21:15',
                'quality': 0.9
              }
            ],
          'contents':
            [
              {
                'content': 'Konkurencja nie ma szans!',
                'quality': 0.1
              },
              {
                'content': 'Naszych drzwi nie wyważy nawet islamski terrorysta!',
                'quality': 0.1
              },
              {
                'content': 'Bank Szwajcarii zamówił właśnie 100 sztuk naszych drzwi, teraz Twoja kolej!',
                'quality': 0.95
              },
              {
                'content': 'Naszym drzwiom nikt się nie oprze!',
                'quality': 0.15
              }
            ]
        },
        {
          'id': 4,
          'question': 'Dodajesz zdjęcie ze swoim jeżem:',
          'dates':
            [
              {
                'date': 'Czwartek 14:30',
                'quality': 0.05
              },
              {
                'date': 'Piątek 20:00',
                'quality': 0.85
              },
              {
                'date': 'Piątek 24:00',
                'quality': 0.6
              },
              {
                'date': 'Poniedziałek 20:30',
                'quality': 0.85
              },
              {
                'date': 'Niedziela 7:00',
                'quality': 0.05
              }
            ],
          'contents':
            [
              {
                'content': 'Co jesz jeżu?',
                'quality': 0.8
              },
              {
                'content': 'Szłoooodziiaaaaak <3 ! ;** ! ',
                'quality': 0.1
              },
              {
                'content': '^^',
                'quality': 0.25
              }
            ]
        },
        {
          'id': 5,
          'question': 'Pytasz się o miejsce, gdzie możesz zjeść w weekend dobrą pizzę w okolicy:',
          'dates':
            [
              {
                'date': 'Czwartek 20:45',
                'quality': 0.95
              },
              {
                'date': 'Piątek 23:30',
                'quality': 0.45
              },
              {
                'date': 'Poniedziałek 8:00',
                'quality': 0.06
              },
              {
                'date': 'Poniedziałek 20:30',
                'quality': 0.08
              },
              {
                'date': 'Niedziela 7:00',
                'quality': 0.1
              }
            ],
          'contents':
            [
              {
                'content': 'Jacyś makaroniarze xDD robiom zajefajnom pize w okoilicy?',
                'quality': 0.001
              },
              {
                // tslint:disable-next-line:max-line-length
                'content': 'Czy w moim gronie znajomych znajdzie się osoba, która podpowie, gdzie zjeść wybitną, prawdziwą włoską pizzę pod koniec tygodnia?',
                'quality': 0.9
              },
              {
                'content': 'Anybody knajpa z pizza na weekend ?',
                'quality': 0.55
              },
              {
                'content': 'Włoska pizzeria, ktoś coś?',
                'quality': 0.55
              }
            ]
        },
        {
          'id': 6,
          'question': 'Chcesz się dowiedzieć czegoś o starym filmie na grupie fanów kina, o który pytano kilka razy:',
          'dates':
            [
              {
                'date': 'Czwartek 12:00',
                'quality': 0.05
              },
              {
                'date': 'Piątek 23:30',
                'quality': 0.05
              },
              {
                'date': 'Wtorek 8:12',
                'quality': 0.05
              },
              {
                'date': 'Niedziela 21:30',
                'quality': 0.05
              },
              {
                'date': 'Sobota 7:00',
                'quality': 0.5
              },
              {
                'date': 'brak',
                'quality': 0.95
              },
            ],
          'contents':
            [
              {
                'content': 'Szukasz lupką czy ktoś już o to pytał',
                'quality': 1
              },
              {
                'content': 'Kto mi opowie o XYZ?',
                'quality': 0.05
              },
              {
                'content': 'Warto obejrzeć XYZ, jakaś krótka recencja?',
                'quality': 0.55
              },
              {
                'content': 'Nic nie robisz',
                'quality': 0.0
              }
            ]
        }
      ];

    const questions2 = [
      {
        'question': 'Jako producent proszków do prania, reklamujesz nowy produkt.',
        'dates': [
          {
            'date': 'Niedziela 12:12 ',
            'quality': 0.25
          },
          {
            'date': 'Wtorek 08:30',
            'quality': 0.85
          },
          {
            'date': 'Piątek 15:30',
            'quality': 0.15
          }
        ],
        'contents': [
          {
            'content': 'Sprawdź jak działa nasz nowy Super Clean: https://www.youtube.com/watch?v=tvTliLyXKpc',
            'quality': 0.15
          },
          {
            'content': 'Zobacz jak działa nasz nowy Super Clean:<br><video src=\'http://w3tech.pl/socials/videos/reklama.mp4\'></video>',
            'quality': 0.95
          },
          {
            'content': 'Sprawdź jak działa nasz nowy Super Clean: http://linkd.pl/u2z',
            'quality': 0.25
          }
        ],
        'id': 0
      },
      {
        'question': 'Promujesz nowy model samochodu osobowego marki Skoda.',
        'dates': [
          {
            'date': 'Poniedziałek 13: 15 ',
            'quality': 0.75
          },
          {
            'date': 'Sobota 10: 20',
            'quality': 0.25
          },
          {
            'date': 'Piątek 12: 30',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            // tslint:disable-next-line:max-line-length
            'content': 'Kliknij UDOSTĘPNIJ jeżeli cieszysz się z nadchodzącej dobrej pogody.    <br>    <img src=\'http://w3tech.pl/socials/images/auto1.jpg\'>',
            'quality': 0.15
          },
          {
            // tslint:disable-next-line:max-line-length
            'content': 'Napisz dlaczego nasz nowy model sprawdzi się w miejskiej dżungli. Najlepsze odpowiedzi zamieścimy w nadchodzącym katalogu na rok 2019.    <br>    <img src=\'http://w3tech.pl/socials/images/auto1.jpg\'>',
            'quality': 0.75
          },
          {
            'content': 'Polub i udostępnij nasz post, jeżeli podoba ci się nasz nowy model Skody Fabia.',
            'quality': 0.35
          }
        ],
        'id': 1
      },
      {
        'question': 'Jaki post ble ble ble',
        'dates': [
          {
            'date': 'Poniedziałek 12: 12 ',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 13: 12',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 14: 12',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            'content': 'lorem ippsumd ',
            'quality': 0.35
          },
          {
            'content': 'loredm ippsum ',
            'quality': 0.35
          },
          {
            'content': 'lodrem ippsum ',
            'quality': 0.35
          }
        ],
        'id': 2
      },
      {
        'question': 'Jaki post ble ble ble',
        'dates': [
          {
            'date': 'Poniedziałek 12: 12 ',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 13: 12',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 14: 12',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            'content': 'lorem ippsumd ',
            'quality': 0.35
          },
          {
            'content': 'loredm ippsum ',
            'quality': 0.35
          },
          {
            'content': 'lodrem ippsum ',
            'quality': 0.35
          }
        ],
        'id': 3
      },
      {
        'question': 'Jaki post ble ble ble',
        'dates': [
          {
            'date': 'Poniedziałek 12: 12 ',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 13: 12',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 14: 12',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            'content': 'lorem ippsumd ',
            'quality': 0.35
          },
          {
            'content': 'loredm ippsum ',
            'quality': 0.35
          },
          {
            'content': 'lodrem ippsum ',
            'quality': 0.35
          }
        ],
        'id': 4
      },
      {
        'question': 'Jaki post ble ble ble',
        'dates': [
          {
            'date': 'Poniedziałek 12: 12 ',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 13: 12',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 14: 12',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            'content': 'lorem ippsumd ',
            'quality': 0.35
          },
          {
            'content': 'loredm ippsum ',
            'quality': 0.35
          },
          {
            'content': 'lodrem ippsum ',
            'quality': 0.35
          }
        ],
        'id': 5
      },
      {
        'question': 'Jaki post ble ble ble',
        'dates': [
          {
            'date': 'Poniedziałek 12: 12 ',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 13: 12',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 14: 12',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            'content': 'lorem ippsumd ',
            'quality': 0.35
          },
          {
            'content': 'loredm ippsum ',
            'quality': 0.35
          },
          {
            'content': 'lodrem ippsum ',
            'quality': 0.35
          }
        ],
        'id': 6
      },
      {
        'question': 'Jaki post ble ble ble',
        'dates': [
          {
            'date': 'Poniedziałek 12: 12 ',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 13: 12',
            'quality': 0.35
          },
          {
            'date': 'Poniedziałek 14: 12',
            'quality': 0.35
          }
        ],
        'contents': [
          {
            'content': 'lorem ippsumd ',
            'quality': 0.35
          },
          {
            'content': 'loredm ippsum ',
            'quality': 0.35
          },
          {
            'content': 'lodrem ippsum ',
            'quality': 0.35
          }
        ],
        'id': 7
      }
    ];
    return { questions: questions2 };
  }

  // genId(questions: Question[]): number {
  //   return questions.length > 0 ? Math.max(...questions.map(question => question.id)) + 1 : 11;
  // }
}
