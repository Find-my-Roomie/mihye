import night from '../components/Test/img/night.jpg';
import roomie from '../components/Test/img/roomie.jpg';
import bed from '../components/Test/img/bed.jpg';
import ramyeon from '../components/Test/img/ramyeon.jpg';
import alarm from '../components/Test/img/alarm.jpg';
import study from '../components/Test/img/study.jpg';
import bathroom from '../components/Test/img/bathroom.jpg';
import cleaning from '../components/Test/img/cleaning.jpg';
import trash from '../components/Test/img/trash.jpg';
import phone from '../components/Test/img/phone.jpg';

const quiz = [
    {
      'question': '기숙사 통금 시간이 30분 남았는데<br/> 친구가 더 놀자고 한다. 이 때 당신은?',
      'src': night,
      'width': '450',
      'height': '450',
      'answers' :[
        {
          'text': '1. 외박은 안되니 친구의 제안을 거절하고 기숙사로 돌아온다.',
          score: 3
        },
        {
          'text': '2. 이 때가 기회라고 생각하고 밤새서 논다.',
          score: 7
        }
      ]
    },

    {
        'question': '시험기간 중 가장 좋아하는 공부 장소는?',
        'src': study,
        'width': '500',
        'height': '360',
        'answers' :[
          {
            text: '1. 편한게 최고지! 내 방.',
            score: 1
          },
          {
            text: '2. 멀리가긴 귀찮아.. 기숙사 내 스터디룸',
            score: 2
          },
          {
            text: '3. 포기할 수 없는 카공(카페)',
            score: 4
          },
          {
            text: '4. ecc 열람실 셀프 감금/공댕이는 공도!',
            score: 3
          }
        ]
    },

    {
        'question': '기숙사 입사 후 처음으로<br/>룸메이트를 마주친 당신의 행동은?',
        'src': roomie,
        'width': '450',
        'height': '450',
        'answers' :[
          {
            text: '1. "번호가 어떻게 되세요?" 그 자리에서 기숙사 카톡방을 만든다.',
            score: 6
          },
          {
            text: '2. 앗... 안녕하세요...(뻘줌한 듯 시선을 방황하며 눈인사)',
            score: 4
          }
        ]
    },

    {
        'question': '배가 고프지만 밤 11시라 기숙사 편의점이 문을 닫았다.<br/>거실에는 아직 어색한 룸메이트의 컵라면이 있다.<br/>당신의 행동은?',
        'src': ramyeon,
        'fontSize': '2.1rem',
        'width': '550',
        'height': '380',
        'answers' :[
          {
            text: '1. 스스럼 없이 룸메이트에게 연락해 먹어도 되는지 물어본다.',
            score: 8
          },
          {
            text: '2. 20분 거리의 기숙사 밖 편의점에 다녀온다.',
            score: 2
          },
          {
            text: '3. 일단 배고프니 먹고 나중에 생각한다.',
            score: 0
          }
        ]
    },

    {
        'question': '쓰레기 당번을 잘 안 지키는 룸메가 못마땅한 당신!<br/>이번에도 룸메가 쓰레기를 안치웠다. 당신의 행동은?',
        'src': trash,
        'fontSize': '2.5rem',
        'width': '500',
        'height': '450',
        'answers' :[
          {
            text: '1. "너 오늘 당번인데 어디야?" 바로 분노의 카톡을 한다.',
            score: 6
          },
          {
            text: '2. 연락할까 말까 고민하다가 결국 직접 치운다.',
            score: 4
          }
        ]
    },

    {
        'question': '볼 일 보고 집에 들어온 당신<br/>눈에 들어온 당신의 방 상태는?',
        'src': bed,
        'width': '600',
        'height': '450',
        'answers' :[
          {
            text: '1. 이불은 널브러져 있고 책상엔 쓰레기, 바닥엔 지우개 똥이 한 가득',
            score: 3
          },
          {
            text: '2. 잘 개어져 있는 이불, 깔끔한 책상. 바닥엔 먼지 한 톨 없이 깔끔~',
            score: 7
          }
        ]
    },

    {
        'question': '욕실에서 머리를 감은 후 나는...',
        'src': bathroom,
        'width': '630',
        'height': '480',
        'answers' :[
          {
            text: "1. '아 개운하다~' 바로 방으로 들어온다.",
            score: 2
          },
          {
            text: '2. 머리카락을 남기면 안되지! 바로 버린다.',
            score: 8
          }
        ]
    },

    {
        'question': '청소기는...',
        'src': cleaning,
        'width': '680',
        'height': '480',
        'answers' :[
          {
            text: '1. 하루에 한 번은 무조건 돌려야지!',
            score: 9
          },
          {
            text: '2. 별로 먼지도 없어보이는데... 좀 더러워지면 돌려야지~',
            score: 1
          }
        ]
    },

    {
        'question': '내일 아침 7시에 꼭 일어나야 한다.<br/>알람을 어떻게 설정할까?',
        'src': alarm,
        'width': '500',
        'height': '450',
        'answers' :[
          {
            text: '1. 6시 55분, 6시 56분, 6시 57분… 절대 한 번에 못 일어나!',
            score: 7
          },
          {
            text: '2. 7시 알람 하나면 충분해~ 알람을 듣고 어떻게 계속 잘 수가 있어?',
            score: 3
          }
        ]
    },

    {
        'question': '할 일을 다 마치고 어느새 시간은 밤 10시.<br/>오늘의 남은 시간 동안 당신은?',
        'src': phone,
        'width': '600',
        'height': '440',
        'answers' :[
          {
            text: '1. 벌써 잘 시간이네Zzz 조금 쉬다가 한시간 이내로 자야겠다!',
            score: 1
          },
          {
            text: '2. 아직 자려면 멀었네. 조금 놀다가 새벽에 자야지~!',
            score: 9
          }
        ]
    }

    
  ]

  export default quiz;