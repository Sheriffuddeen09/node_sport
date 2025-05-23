import logo from './image/images.png'
import logob from './image/I.png'
import logoc from './image/images.png'
import logod from './image/e.png'
import logoe from './image/arrow.png'
export const folders = [
  { id: 'open', label: ' Open' },
  { id: 'waiting', label: 'Waiting longest' }
];


export const chats = {
  open: [
    { id: 'u1', image:logo, name: 'Luis • Github', last: 'Hey! I have a quest…', date:'45m', fontWeight: "normal", min:'', dot:"", bg:'transparent', color:'white', rounded:'10px',width:'',wid:'', padding:'', black:'', gap:40  },
    { id: 'u2',image:logob, name: 'Ivan • Nike', last: 'Hi there, I have a Qu…', date:'30m', fontWeight: "bold", min:'3min', dot:"",bg:'#fff697', color:'black', rounded:'10px',width:'40', wid:'8', hei:'8', padding:'4', black:'black',gap:30 },
    { id: 'u3', image:logoc, name: 'Lead from New York', last: 'Hi there, I have a Qu…', date:'30m',fontWeight: "bold", min:'1', dot:"",bg:'black', color:'white', rounded:'100%',width:'20', gap:0 },
    { id: 'u4', image:logod, name: 'Booking API problems', last: 'Bug report',second:'Luis  - Small Crafts', date:'45m',fontWeight: "normal", min:'', dot:"", bg:'transparent', color:'white',rounded:'10px',width:'',gap:0 },
    { id: 'u5', image:logoe, name: 'Miracle - Exemplary Bank', last: "Hey there! I'm here to…", date:'45m',fontWeight: "normal", min:'', dot:"",bg:'transparent',color:'white', rounded:'10px',width:'',gap:0 }

  ],
  waiting: [
     { id: 'u3', image:logoc, name: 'Lead from New York', last: 'Hi there, I have a Qu…', date:'30m',fontWeight: "bold", min:'1', dot:"",bg:'black', color:'white', rounded:'100%',width:'20', gap:0 },
    { id: 'u4', image:logod, name: 'Booking API problems', last: 'Bug report',second:'Luis  - Small Crafts', date:'45m',fontWeight: "normal", min:'', dot:"", bg:'transparent', color:'white',rounded:'10px',width:'',gap:0 },
  ]
};

export const messages = {
  u1: [
    { id: 'm1', from: 'customer', text: "I bought a product from you store in November as a christmas gift for a member of my family. However, it turns out they have something very similar already. i was hoping you'd be able to refund me, as it is un-opened", ts: '1m', bg:'#e6e6e8', icon:`black`, status:'', image:logo, textposition:'start' },
    { id: 'm2', from: 'agent', text: 'Let me look into thi for you, Luis', ts: '1min',  icon:`transparent`, status:'Seen', bg:'#dcdafa', image:"https://i.pravatar.cc/32?img=5", flex:'row-reverse', textposition:'end' }
  ],
   u2: [
    { id: 'm1', from: 'customer', text: "i was hoping you'd be able to refund me, as it is the first time i did such mistake", ts: '1m', bg:'#e6e6e8', icon:`black`, status:'', image:logob, textposition:'start' },
    { id: 'm2', from: 'agent', text: 'Let me look into thi for you, Luis', ts: '1min',  icon:`transparent`, status:'Seen', bg:'#dcdafa', image:"https://i.pravatar.cc/32?img=5", flex:'row-reverse', textposition:'end' }
  ],
  u3: [
    { id: 'm1', from: 'customer', text: "The product is attractive However, it turns out they have something very similar already. i was hoping you'd be able to refund me, as it is un-opened", ts: '1m', bg:'#e6e6e8', icon:`black`, status:'', image:logoc, textposition:'start' },
    { id: 'm2', from: 'agent', text: 'Let me look into thi for you, Luis', ts: '1min',  icon:`transparent`, status:'Seen', bg:'#dcdafa', image:"https://i.pravatar.cc/32?img=5", flex:'row-reverse', textposition:'end' }
  ],
};

export const sections = [
  "User Data",
  "Conversation Attributes",
  "Company Details",
  "Salesforce",
  "Stripe",
  "JIRA for Tickets",
];