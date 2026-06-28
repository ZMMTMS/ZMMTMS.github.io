const nameSets = {
  western: { m:["James","John","Michael","David","William","Robert","Daniel","Matthew","Andrew","Ryan","Joseph","Thomas","Charles","Christopher","Joshua","George","Benjamin","Jack","Henry","Samuel"], f:["Mary","Jennifer","Linda","Elizabeth","Susan","Sarah","Jessica","Emily","Emma","Olivia","Margaret","Karen","Lisa","Sophia","Grace","Hannah","Charlotte","Amelia","Chloe","Ruth"], last:["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Wilson","Taylor","Anderson","Thomas","Moore","Clark","Walker","Hall","Young","Wright","King","Hill","Baker"] },
  hispanic: { m:["José","Juan","Luis","Carlos","Miguel","Jorge","Manuel","Diego","Javier","Antonio","Pedro","Francisco","Alejandro","Fernando","Sergio","Ricardo","Andrés","Pablo","Raúl","Mario"], f:["María","Carmen","Ana","Isabel","Sofía","Lucía","Laura","Elena","Daniela","Valentina","Rosa","Marta","Patricia","Gabriela","Andrea","Cristina","Paula","Natalia","Sara","Beatriz"], last:["García","Martínez","López","González","Rodríguez","Pérez","Sánchez","Ramírez","Torres","Flores","Gómez","Díaz","Reyes","Morales","Cruz","Ortiz","Ramos","Castillo","Romero","Vargas"] },
  arabic: { m:["Mohammed","Ahmed","Ali","Omar","Hassan","Ibrahim","Yusuf","Khalid","Mahmoud","Tariq","Karim","Samir","Bilal","Hamza","Rashid","Nabil","Fadi","Walid","Adel","Zaid"], f:["Fatima","Aisha","Maryam","Layla","Zainab","Noor","Amira","Yasmin","Salma","Khadija","Hana","Rania","Dalia","Nadia","Samira","Huda","Leila","Farah","Sana","Asma"], last:["Al-Sayed","Hassan","Ahmed","Mansour","Saleh","Aziz","Haddad","Nasser","Khan","Farouk","Rahman","Ibrahim","Mostafa","Karim","Said","Hamdan","Sharif","Najjar","Habib","Qureshi"] },
  chinese: { m:["Wei","Jun","Hao","Lei","Ming","Tao","Peng","Yong","Gang","Feng","Bin","Jian","Kai","Cheng","Hui","Bo","Long","Yi","Xiang","Liang"], f:["Fang","Min","Jing","Yan","Na","Hong","Ying","Xia","Mei","Juan","Li","Lan","Ping","Hua","Qing","Yun","Xue","Dan","Ling","Zhen"], last:["Wang","Li","Zhang","Liu","Chen","Yang","Huang","Zhao","Wu","Zhou","Xu","Sun","Ma","Zhu","Hu","Guo","Lin","He","Gao","Luo"] },
  indian: { m:["Aarav","Arjun","Rohan","Aditya","Rahul","Vikram","Amit","Karan","Suresh","Raj","Sanjay","Vivek","Ravi","Anil","Deepak","Nikhil","Manoj","Ajay","Kunal","Sandeep"], f:["Aanya","Priya","Anjali","Neha","Pooja","Divya","Kavya","Meera","Sunita","Lakshmi","Aishwarya","Sneha","Ananya","Riya","Nisha","Kiran","Shreya","Geeta","Radha","Ishita"], last:["Sharma","Patel","Singh","Kumar","Gupta","Reddy","Nair","Rao","Das","Mehta","Joshi","Iyer","Chopra","Verma","Kapoor","Malhotra","Bose","Pillai","Shah","Banerjee"] },
  japanese: { m:["Haruto","Yuto","Sota","Hayato","Riku","Ren","Daiki","Kenta","Takashi","Hiroshi","Sho","Kaito","Yuki","Ryo","Daichi","Kenji","Akira","Satoshi","Taro","Naoki"], f:["Yui","Aoi","Hana","Sakura","Yuna","Mio","Rin","Akari","Hina","Keiko","Yuka","Saki","Mei","Nanami","Ayaka","Misaki","Kana","Emi","Haruka","Rei"], last:["Sato","Suzuki","Takahashi","Tanaka","Watanabe","Ito","Yamamoto","Nakamura","Kobayashi","Kato","Yoshida","Yamada","Sasaki","Yamaguchi","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Mori"] },
  korean: { m:["Min-jun","Seo-jun","Do-yun","Ji-ho","Joon","Hyun","Seung","Jin","Sung-min","Tae-yang","Jae-won","Min-ho","Dong-hyun","Woo-jin","Hyun-woo","Sang-hoon","Jun-seo","Ji-hoon","Young-ho","Kang-min"], f:["Seo-yeon","Ji-woo","Min-seo","Ha-eun","Soo-jin","Hye-jin","Eun-ji","Yu-na","Ji-eun","Bo-ram","Ye-jin","Hae-won","Da-eun","So-yeon","Ji-min","Eun-seo","Ji-yeon","Mi-rae","Seo-hyun","Na-yeon"], last:["Kim","Lee","Park","Choi","Jung","Kang","Cho","Yoon","Jang","Lim","Han","Shin","Oh","Seo","Kwon","Hwang","Ahn","Song","Yang","Bae"] },
  vietnamese: { m:["Anh","Minh","Hoang","Tuan","Duc","Nam","Khanh","Long","Hung","Quang","Phong","Thanh","Bao","Dung","Kien","Son","Vinh","Trung","Hai","Cuong"], f:["Linh","Huong","Lan","Mai","Thuy","Ngoc","Hanh","Trang","Phuong","Thao","Yen","Hoa","Nga","Tuyet","Chi","Diep","Quynh","Suong","Hien","Loan"], last:["Nguyen","Tran","Le","Pham","Hoang","Phan","Vu","Dang","Bui","Do","Ho","Ngo","Duong","Ly","Dinh","Mai","Truong","Lam","Cao","Vo"] },
  thai: { m:["Somchai","Anan","Niran","Decha","Krit","Arthit","Prasit","Chai","Wirat","Surasak","Narong","Somsak","Wichai","Boon","Kamol","Thawee","Prayut","Sak","Chatchai","Pichai"], f:["Siri","Malee","Achara","Kanya","Lawan","Pranee","Sukanya","Wanida","Ratana","Nong","Sunisa","Ploy","Kamon","Duangjai","Suda","Napa","Pim","Wassana","Nittaya","Orawan"], last:["Saengthong","Wongsawat","Chankaew","Phongsiri","Srisuk","Boonmee","Rattanakorn","Thongchai","Sutthiwong","Kittisak","Suwan","Charoen","Phithak","Sombat","Wattana","Inthira","Pansak","Rojana","Khamphan","Tewari"] },
  indonesian: { m:["Budi","Agus","Andi","Joko","Bambang","Eko","Rizki","Putra","Wahyu","Dwi","Hadi","Slamet","Bayu","Surya","Adi","Rudi","Yusuf","Fajar","Iqbal","Teguh"], f:["Siti","Dewi","Sri","Putri","Ayu","Indah","Wulan","Rina","Fitri","Maya","Lestari","Ratih","Sari","Intan","Wati","Nur","Dian","Yuni","Kartika","Endah"], last:["Wijaya","Susanto","Hidayat","Saputra","Pratama","Nugroho","Santoso","Halim","Gunawan","Kurniawan","Setiawan","Suryadi","Hartono","Wibowo","Utomo","Maulana","Firmansyah","Permana","Hakim","Rahardjo"] },
  russian: { m:["Alexander","Dmitri","Ivan","Sergei","Andrei","Mikhail","Nikolai","Vladimir","Pavel","Maxim","Alexei","Yuri","Oleg","Boris","Igor","Roman","Anton","Konstantin","Viktor","Denis"], f:["Olga","Elena","Natalia","Irina","Tatiana","Svetlana","Ekaterina","Yulia","Anastasia","Nadia","Marina","Galina","Vera","Lyudmila","Oksana","Polina","Daria","Alina","Ksenia","Larisa"], last:["Ivanov","Smirnov","Kuznetsov","Popov","Volkov","Petrov","Sokolov","Novikov","Morozov","Pavlov","Mikhailov","Fedorov","Egorov","Kozlov","Stepanov","Nikolaev","Orlov","Makarov","Andreev","Vasiliev"] },
  polish: { m:["Jakub","Jan","Piotr","Krzysztof","Andrzej","Tomasz","Paweł","Michał","Marcin","Łukasz","Mateusz","Adam","Wojciech","Grzegorz","Marek","Rafał","Dawid","Kamil","Bartosz","Stanisław"], f:["Anna","Maria","Katarzyna","Małgorzata","Agnieszka","Magdalena","Joanna","Ewa","Zofia","Julia","Barbara","Aleksandra","Monika","Karolina","Natalia","Dorota","Beata","Marta","Paulina","Iwona"], last:["Nowak","Kowalski","Wiśniewski","Wójcik","Kowalczyk","Kamiński","Lewandowski","Zieliński","Szymański","Woźniak","Dąbrowski","Kozłowski","Jankowski","Mazur","Kwiatkowski","Krawczyk","Piotrowski","Grabowski","Nowicki","Pawlak"] },
  german: { m:["Lukas","Felix","Maximilian","Paul","Leon","Jonas","Finn","Elias","Hans","Klaus","Niklas","Tim","Lennard","Moritz","Jan","Sebastian","Tobias","Florian","Andreas","Stefan"], f:["Marie","Sophie","Maria","Emma","Hannah","Mia","Anna","Lena","Laura","Sabine","Lea","Leonie","Julia","Katharina","Johanna","Lisa","Nina","Sarah","Petra","Monika"], last:["Müller","Schmidt","Schneider","Fischer","Weber","Meyer","Wagner","Becker","Schulz","Hoffmann","Schäfer","Koch","Bauer","Richter","Klein","Wolf","Neumann","Schwarz","Zimmermann","Braun"] },
  french: { m:["Lucas","Louis","Hugo","Jules","Nathan","Léo","Gabriel","Arthur","Antoine","Pierre","Théo","Maxime","Paul","Clément","Alexandre","Thomas","Quentin","Romain","Julien","Nicolas"], f:["Emma","Léa","Chloé","Manon","Camille","Sarah","Marie","Julie","Lucie","Inès","Jade","Louise","Alice","Léna","Clara","Sophie","Charlotte","Pauline","Claire","Nathalie"], last:["Martin","Bernard","Dubois","Thomas","Robert","Petit","Durand","Leroy","Moreau","Lefebvre","Garnier","Faure","Rousseau","Girard","Bonnet","Dupont","Lambert","Fontaine","Mercier","Blanc"] },
  italian: { m:["Francesco","Alessandro","Lorenzo","Matteo","Andrea","Gabriele","Marco","Giuseppe","Antonio","Luca","Davide","Simone","Federico","Riccardo","Stefano","Giovanni","Paolo","Roberto","Daniele","Nicola"], f:["Sofia","Giulia","Aurora","Alice","Martina","Chiara","Sara","Francesca","Elena","Giorgia","Valentina","Beatrice","Anna","Federica","Silvia","Laura","Marta","Elisa","Paola","Roberta"], last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Colombo","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Costa","Giordano","Mancini","Rizzo","Lombardi","Moretti"] },
  persian: { m:["Ali","Reza","Hossein","Amir","Mohammad","Mehdi","Saeed","Farhad","Babak","Arash","Kourosh","Dariush","Behrouz","Navid","Omid","Ramin","Siavash","Kaveh","Pouya","Bijan"], f:["Fatemeh","Zahra","Maryam","Sara","Niloufar","Shirin","Leila","Nasrin","Parisa","Mahsa","Yasaman","Roya","Mitra","Azadeh","Setareh","Nazanin","Golnaz","Shabnam","Forough","Ladan"], last:["Hosseini","Mohammadi","Ahmadi","Rezaei","Karimi","Tehrani","Jafari","Moradi","Sadeghi","Bagheri","Hashemi","Akbari","Rahimi","Mousavi","Ghasemi","Nazari","Shirazi","Yazdani","Kazemi","Esfahani"] },
  turkish: { m:["Mehmet","Mustafa","Ahmet","Ali","Hasan","Emre","Murat","Yusuf","Burak","Kerem","Hüseyin","İbrahim","Onur","Serkan","Volkan","Eren","Cem","Oğuz","Tolga","Barış"], f:["Fatma","Ayşe","Emine","Zeynep","Elif","Merve","Esra","Selin","Derya","Ece","Büşra","Sevgi","Gül","Özlem","Hande","Aslı","Pınar","Nur","Dilek","Ebru"], last:["Yılmaz","Kaya","Demir","Şahin","Çelik","Yıldız","Yıldırım","Öztürk","Aydın","Arslan","Doğan","Kılıç","Aslan","Çetin","Kara","Koç","Kurt","Özdemir","Şimşek","Polat"] },
  nigerian: { m:["Chinedu","Emeka","Oluwaseun","Tunde","Ifeanyi","Babatunde","Obi","Adebayo","Yusuf","Musa","Chukwuma","Segun","Kunle","Nnamdi","Femi","Uche","Ade","Olumide","Ibrahim","Chidi"], f:["Ngozi","Chioma","Amara","Folake","Funmilayo","Adaeze","Ifeoma","Blessing","Zainab","Aisha","Chiamaka","Yetunde","Bukola","Nneka","Temitope","Halima","Oluwakemi","Ada","Fatima","Ronke"], last:["Okafor","Adeyemi","Okonkwo","Abubakar","Eze","Balogun","Obi","Adebayo","Nwosu","Okeke","Afolabi","Bello","Chukwu","Olawale","Ogunleye","Mohammed","Nwankwo","Adeleke","Ojo","Ibe"] },
  africanEast: { m:["Abebe","Dawit","Tesfaye","Kamau","Mwangi","Otieno","Juma","Solomon","Bekele","Omondi","Kipchoge","Mutua","Wafula","Girma","Tadesse","Njoroge","Onyango","Hassan","Yonas","Kibet"], f:["Tigist","Meron","Selam","Wanjiku","Akinyi","Njeri","Aster","Hanna","Amani","Zawadi","Wangari","Halima","Bethlehem","Achieng","Nyambura","Genet","Sada","Auma","Hiwot","Wairimu"], last:["Tesfaye","Bekele","Kamau","Mwangi","Otieno","Abebe","Getachew","Wanjala","Kiprop","Mutua","Njoroge","Omondi","Hailu","Mengistu","Wekesa","Kimani","Achieng","Gebre","Mwangangi","Ochieng"] },
  brazilian: { m:["João","Pedro","Lucas","Gabriel","Matheus","Rafael","Felipe","Bruno","Gustavo","Thiago","Carlos","Rodrigo","Marcelo","Fernando","Eduardo","Vinícius","Diego","Leonardo","Paulo","Ricardo"], f:["Maria","Ana","Beatriz","Juliana","Camila","Larissa","Fernanda","Mariana","Gabriela","Bruna","Patrícia","Carla","Letícia","Amanda","Vanessa","Renata","Aline","Tatiane","Bianca","Débora"], last:["Silva","Santos","Oliveira","Souza","Lima","Pereira","Ferreira","Costa","Rodrigues","Almeida","Carvalho","Gomes","Martins","Araújo","Ribeiro","Barbosa","Rocha","Cardoso","Teixeira","Correia"] }
};

const flags = ["🇨🇳","🇮🇳","🇺🇸","🇮🇩","🇵🇰","🇳🇬","🇧🇷","🇧🇩","🇷🇺","🇲🇽","🇯🇵","🇪🇹","🇵🇭","🇪🇬","🇻🇳","🇨🇩","🇮🇷","🇹🇷","🇩🇪","🇹🇭","🇬🇧","🇫🇷","🇿🇦","🇮🇹","🇰🇪","🇰🇷","🇨🇴","🇪🇸","🇦🇷","🇺🇦","🇩🇿","🇸🇩","🇺🇬","🇮🇶","🇦🇫","🇵🇱","🇨🇦","🇲🇦","🇸🇦","🇦🇺"];
const flagWeights = [1410,1430,335,277,240,223,216,173,144,128,123,127,117,112,98,102,89,85,84,72,68,68,60,59,55,52,52,48,46,37,45,48,47,45,42,38,39,37,37,26];
const flagNames = {"🇨🇳":"China","🇮🇳":"India","🇺🇸":"USA","🇮🇩":"Indonesia","🇵🇰":"Pakistan","🇳🇬":"Nigeria","🇧🇷":"Brazil","🇧🇩":"Bangladesh","🇷🇺":"Russia","🇲🇽":"Mexico","🇯🇵":"Japan","🇪🇹":"Ethiopia","🇵🇭":"Philippines","🇪🇬":"Egypt","🇻🇳":"Vietnam","🇨🇩":"DR Congo","🇮🇷":"Iran","🇹🇷":"Turkey","🇩🇪":"Germany","🇹🇭":"Thailand","🇬🇧":"UK","🇫🇷":"France","🇿🇦":"South Africa","🇮🇹":"Italy","🇰🇪":"Kenya","🇰🇷":"South Korea","🇨🇴":"Colombia","🇪🇸":"Spain","🇦🇷":"Argentina","🇺🇦":"Ukraine","🇩🇿":"Algeria","🇸🇩":"Sudan","🇺🇬":"Uganda","🇮🇶":"Iraq","🇦🇫":"Afghanistan","🇵🇱":"Poland","🇨🇦":"Canada","🇲🇦":"Morocco","🇸🇦":"Saudi Arabia","🇦🇺":"Australia"};
const flagToSet = {"🇨🇳":"chinese","🇮🇳":"indian","🇺🇸":"western","🇮🇩":"indonesian","🇵🇰":"arabic","🇳🇬":"nigerian","🇧🇷":"brazilian","🇧🇩":"arabic","🇷🇺":"russian","🇲🇽":"hispanic","🇯🇵":"japanese","🇪🇹":"africanEast","🇵🇭":"hispanic","🇪🇬":"arabic","🇻🇳":"vietnamese","🇨🇩":"french","🇮🇷":"persian","🇹🇷":"turkish","🇩🇪":"german","🇹🇭":"thai","🇬🇧":"western","🇫🇷":"french","🇿🇦":"western","🇮🇹":"italian","🇰🇪":"africanEast","🇰🇷":"korean","🇨🇴":"hispanic","🇪🇸":"hispanic","🇦🇷":"hispanic","🇺🇦":"russian","🇩🇿":"arabic","🇸🇩":"arabic","🇺🇬":"africanEast","🇮🇶":"arabic","🇦🇫":"persian","🇵🇱":"polish","🇨🇦":"western","🇲🇦":"arabic","🇸🇦":"arabic","🇦🇺":"western"};

const mbtiTypes = ["ISFJ","ESFJ","ISTJ","ISFP","ESTJ","ESFP","ENFP","ISTP","INFP","ESTP","INTP","ENTP","ENFJ","INTJ","ENTJ","INFJ"];
const mbtiWeights = [13.8,12.3,11.6,8.8,8.7,8.5,8.1,5.4,4.4,4.3,3.3,3.2,2.5,2.1,1.8,1.5];

const conditions = [
  {name:"Anxiety disorder",p:0.12,spectrum:true,fMul:1.4,mMul:0.7,iqType:"highMore",herit:0.3,desc:"Excessive, persistent worry or fear that interferes with daily life."},
  {name:"Depression",p:0.08,spectrum:true,fMul:1.4,mMul:0.65,iqType:"highMore",herit:0.3,desc:"A mood disorder causing persistent sadness and loss of interest."},
  {name:"Dyslexia",p:0.07,herit:0.5,desc:"A learning difference affecting reading and word processing."},
  {name:"Misophonia",p:0.06,desc:"Strong emotional reactions to specific sounds such as chewing."},
  {name:"ADHD",p:0.05,spectrum:true,mMul:1.35,fMul:0.65,iqType:"highMore",herit:0.5,desc:"Attention-deficit/hyperactivity disorder; affects focus and impulse control."},
  {name:"Dyscalculia",p:0.04,herit:0.4,desc:"A learning difference affecting the understanding of numbers and maths."},
  {name:"PTSD",p:0.035,spectrum:true,ageType:"rises",fMul:1.4,mMul:0.7,herit:0.3,desc:"Post-traumatic stress disorder following a traumatic event."},
  {name:"Obsessive-compulsive PD",p:0.03,ageType:"adult",desc:"A personality pattern of perfectionism, control and orderliness."},
  {name:"Aphantasia",p:0.03,desc:"The inability to voluntarily form mental images in the mind."},
  {name:"Synesthesia",p:0.03,herit:0.4,desc:"A blending of senses, e.g. seeing colours when hearing sounds."},
  {name:"Autism spectrum",p:0.025,spectrum:true,mMul:1.5,fMul:0.45,iqType:"highMore",herit:0.6,desc:"A developmental difference affecting social interaction and behaviour."},
  {name:"Avoidant PD",p:0.022,ageType:"adult",desc:"A pattern of social inhibition and intense fear of rejection."},
  {name:"Prosopagnosia",p:0.02,herit:0.3,desc:"Face blindness; difficulty recognising familiar faces."},
  {name:"Paranoid PD",p:0.018,ageType:"adult",desc:"A pattern of pervasive distrust and suspicion of others."},
  {name:"Bipolar disorder",p:0.015,spectrum:true,ageType:"youth",iqType:"highMore",herit:0.45,desc:"Mood swings between depressive lows and manic highs."},
  {name:"Eating disorder",p:0.015,ageType:"youth",fMul:1.75,mMul:0.25,herit:0.25,desc:"A serious condition involving disturbed eating behaviours."},
  {name:"Antisocial PD",p:0.015,spectrum:true,ageType:"adult",mMul:1.6,fMul:0.4,herit:0.4,desc:"A pattern of disregard for the rights and feelings of others."},
  {name:"Trichotillomania",p:0.014,fMul:1.4,mMul:0.6,desc:"A recurring urge to pull out one's own hair."},
  {name:"Borderline PD",p:0.014,spectrum:true,ageType:"adult",fMul:1.5,mMul:0.5,herit:0.4,desc:"Instability in mood, self-image and relationships."},
  {name:"OCD",p:0.012,spectrum:true,iqType:"highMore",herit:0.3,desc:"Obsessive-compulsive disorder; intrusive thoughts and repetitive rituals."},
  {name:"Narcissistic PD",p:0.01,spectrum:true,ageType:"adult",mMul:1.4,fMul:0.6,desc:"A pattern of grandiosity, need for admiration and low empathy."},
  {name:"Psychopathy",p:0.01,spectrum:true,ageType:"adult",mMul:1.6,fMul:0.4,herit:0.4,desc:"Traits of low empathy, charm and impulsivity, gauged by the PCL-R scale."},
  {name:"Histrionic PD",p:0.009,ageType:"adult",fMul:1.3,mMul:0.7,desc:"A pattern of excessive emotionality and attention-seeking."},
  {name:"Schizoid PD",p:0.009,ageType:"adult",desc:"Detachment from social relationships and a narrow range of emotion."},
  {name:"Schizotypal PD",p:0.008,ageType:"adult",desc:"Eccentric behaviour and acute discomfort with close relationships."},
  {name:"Tourette syndrome",p:0.006,ageType:"youth",mMul:1.5,fMul:0.5,herit:0.4,desc:"A nervous-system condition causing involuntary movements and sounds."},
  {name:"Schizophrenia",p:0.005,spectrum:true,ageType:"youth",mMul:1.2,fMul:0.8,iqType:"lowMore",herit:0.4,desc:"A disorder affecting thought, perception and the sense of reality."},
  {name:"Narcolepsy",p:0.0005,ageType:"youth",desc:"A sleep disorder causing sudden, uncontrollable bouts of sleep."},
  {name:"Huntington's disease",p:0.00007,ageType:"rises",herit:0.5,desc:"An inherited disorder causing progressive degeneration of the brain."},
  {name:"Capgras delusion",p:0.00002,ageType:"rises",desc:"The belief that a loved one has been replaced by an identical impostor."},
  {name:"Stendhal syndrome",p:0.00001,desc:"Dizziness and racing heart when viewing intensely beautiful art."},
  {name:"Cotard's delusion",p:0.00001,ageType:"rises",desc:"The delusion that one is dead, dying or does not exist."},
  {name:"Alien hand syndrome",p:0.000005,ageType:"rises",desc:"A hand that acts on its own without conscious control."},
  {name:"Foreign accent syndrome",p:0.000002,desc:"Speech that suddenly takes on what sounds like a foreign accent."},
  {name:"Hyperthymesia",p:0.0000005,desc:"An extraordinarily detailed memory of one's own life."},
  {name:"Fatal familial insomnia",p:0.0000005,ageType:"rises",herit:0.5,desc:"An ultra-rare inherited disease of progressive, untreatable insomnia."}
];
const condInfo = {};
for (const c of conditions) condInfo[c.name] = c;

const wealthTiers = [
  {lo:100,hi:50000,w:12,neg:true},{lo:1,hi:10000,w:34},{lo:10000,hi:100000,w:33},{lo:100000,hi:1000000,w:19.4},
  {lo:1000000,hi:10000000,w:1.5},{lo:10000000,hi:100000000,w:0.08},{lo:100000000,hi:1000000000,w:0.004},
  {lo:1000000000,hi:100000000000,w:0.0004},{lo:100000000000,hi:1000000000000,w:0.000004},{lo:1000000000000,hi:100000000000000,w:0.0000004}
];
const ageBands = [{lo:1,hi:9,w:12},{lo:10,hi:19,w:12},{lo:20,hi:29,w:13},{lo:30,hi:39,w:13},{lo:40,hi:49,w:12},{lo:50,hi:59,w:11},{lo:60,hi:69,w:10},{lo:70,hi:79,w:8},{lo:80,hi:89,w:5},{lo:90,hi:99,w:1.5},{lo:100,hi:109,w:0.04},{lo:110,hi:120,w:0.004}];

const jobTiers = [
  { titles:["Cleaner","Retail Worker","Waiter","Driver","Labourer","Cashier","Bartender","Warehouse Worker","Porter","Carer"], salary:[16000,28000] },
  { titles:["Teacher","Nurse","Electrician","Accountant","Plumber","Chef","Police Officer","Technician","Mechanic","Clerk","Paramedic","Journalist"], salary:[28000,52000] },
  { titles:["Engineer","Lawyer","Architect","Manager","Pharmacist","Pilot","Dentist","Consultant","Professor","Analyst"], salary:[55000,115000] },
  { titles:["Doctor","Surgeon","Scientist","Executive","CEO","Entrepreneur","Investment Banker","Hedge Fund Manager"], salary:[120000,450000] }
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const SPEEDS = [{label:"1×",ms:1000},{label:"2×",ms:500},{label:"5×",ms:200},{label:"10×",ms:100},{label:"20×",ms:50}];

const KEY = "zmmtms_v8";
const MAX = 10000;
const FERT_MIN = 0.5, FERT_MAX = 3.0;
const GRAB_W = 10;
const SEEK_CHANCE = 0.05;
const TWEMOJI_OPTS = { base:"https://cdn.jsdelivr.net/gh/jdecked/twemoji@master/assets/", folder:"svg", ext:".svg" };

const startView = document.getElementById("startView");
const simView = document.getElementById("simView");
const slider = document.getElementById("slider");
const grab = document.getElementById("grab");
const val = document.getElementById("val");
const fertSlider = document.getElementById("fertSlider");
const fertGrab = document.getElementById("fertGrab");
const fertVal = document.getElementById("fertVal");
const gen = document.getElementById("gen");
const reset = document.getElementById("reset");
const search = document.getElementById("search");
const list = document.getElementById("list");
const listHead = document.getElementById("listHead");
const cardSlot = document.getElementById("cardSlot");
const stats = document.getElementById("stats");
const dashboard = document.getElementById("dashboard");
const logScreen = document.getElementById("logScreen");
const logBody = document.getElementById("logBody");
const tabDash = document.getElementById("tabDash");
const tabLog = document.getElementById("tabLog");
const wbTime = document.getElementById("wbTime");
const wbSeason = document.getElementById("wbSeason");
const wbTemp = document.getElementById("wbTemp");
const wbPop = document.getElementById("wbPop");
const wbBirths = document.getElementById("wbBirths");
const wbDeaths = document.getElementById("wbDeaths");
const playBtn = document.getElementById("playBtn");
const stepBtn = document.getElementById("stepBtn");
const speedBtn = document.getElementById("speedBtn");
const speedSel = document.getElementById("speedSel");

let value = 10;
let fertility = 1.5;
let people = [];
let selected = null;
let searchTerm = "";
let log = [];
let view = "dashboard";
let sortKey = "name";
let sortDir = 1;
let tickCount = 0;
let totalBirths = 0;
let totalDeaths = 0;
let temperature = 0;
let playing = false;
let speedIdx = 0;
let intervalId = null;

const tip = document.createElement("div");
tip.id = "tip";
document.body.appendChild(tip);

function randPick(a){ return a[Math.floor(Math.random()*a.length)]; }
function clamp(v,a,b){ return Math.max(a,Math.min(b,v)); }
function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function gaussian(){ let u=0,v=0; while(u===0)u=Math.random(); while(v===0)v=Math.random(); return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); }
function weightedChoice(items,weights){ let total=0; for(const w of weights) total+=w; let r=Math.random()*total; for(let i=0;i<items.length;i++){ r-=weights[i]; if(r<0) return items[i]; } return items[items.length-1]; }

function makeId(used){ const c="0123456789ABCDEF"; let id; do{ id=""; for(let i=0;i<8;i++) id+=c[Math.floor(Math.random()*16)]; } while(used.has(id)); used.add(id); return id; }
function pickFlags(){ const n=weightedChoice([1,2,3],[70,24,6]); const out=[]; let g=0; while(out.length<n&&g<50){ const f=weightedChoice(flags,flagWeights); if(!out.includes(f)) out.push(f); g++; } return out; }
function firstName(flag,sex){ const s=nameSets[flagToSet[flag]]||nameSets.western; return randPick(sex==="Male"?s.m:s.f); }
function surnameFor(flag){ const s=nameSets[flagToSet[flag]]||nameSets.western; return randPick(s.last); }
function makeName(flag,sex){ return firstName(flag,sex)+" "+surnameFor(flag); }
function rollAge(){ const b=weightedChoice(ageBands,ageBands.map(x=>x.w)); return randInt(b.lo,b.hi); }
function rollIQ(){ return clamp(Math.round(100+gaussian()*15),50,200); }
function rollOrientation(){ return Math.random()<0.92 ? "Straight" : "Gay"; }
function rollHappiness(){ return Math.round(((Math.random()+Math.random())/2)*100); }

function ageWealthFactor(age){ if(age<22)return 0.15+(age-16)/6*0.15; if(age<35)return 0.30+(age-22)/13*0.35; if(age<50)return 0.65+(age-35)/15*0.25; if(age<65)return 0.90+(age-50)/15*0.15; return Math.max(0.80,1.05-(age-65)/55*0.25); }
function iqWealthFactor(iq){ let f; if(iq<=100)f=0.7+(iq-70)/30*0.3; else if(iq<=130)f=1.0+(iq-100)/30*0.5; else if(iq<=145)f=1.5; else f=1.5-(iq-145)/55*0.3; return clamp(f,0.5,1.6)*(0.4+Math.random()*1.4); }
function rollMoney(age,iq){ if(age<18) return Math.random()<0.7?0:randInt(0,3000); const t=weightedChoice(wealthTiers,wealthTiers.map(x=>x.w)); const lo=Math.log10(t.lo),hi=Math.log10(t.hi); const base=Math.pow(10,lo+Math.random()*(hi-lo)); const v=base*ageWealthFactor(age)*iqWealthFactor(iq); return Math.round(t.neg?-v:v); }

function assignJob(age,iq,money){
  if(age<6) return {job:"Child",salary:0};
  if(age<18) return {job:"Student",salary:0};
  if(age>=67) return {job:"Retired",salary:0};
  if(money>=1e7){ const t=jobTiers[3]; return {job:randPick(["Entrepreneur","CEO","Investment Banker","Executive"]),salary:randInt(150000,600000)}; }
  if(Math.random()<0.06) return {job:"Unemployed",salary:0};
  let t; const r=Math.random();
  if(iq<90) t=(r<0.7?0:1);
  else if(iq<105) t=(r<0.5?1:(r<0.85?0:2));
  else if(iq<120) t=(r<0.5?2:(r<0.8?1:3));
  else t=(r<0.55?3:2);
  const tier=jobTiers[t];
  return {job:randPick(tier.titles),salary:randInt(tier.salary[0],tier.salary[1])};
}

function ageMul(type,age){ if(type==="rises")return 0.4+age/120*1.4; if(type==="youth"){const d=age-18;return 0.05+1.6*Math.exp(-(d*d)/128);} if(type==="adult")return age<14?0.05:Math.min(1.3,0.2+(age-14)/20); return 1; }
function iqMul(type,iq){ if(type==="highMore")return clamp(1+(iq-100)/200,0.5,2); if(type==="lowMore")return clamp(1+(100-iq)/200,0.5,2); return 1; }
function rollSeverity(){ const band=weightedChoice([[20,39],[40,69],[70,98]],[55,32,13]); return randInt(band[0],band[1]); }
function sevInfo(p){ if(p<40)return{label:"Mild",cls:"sev-mild"}; if(p<70)return{label:"Moderate",cls:"sev-mod"}; return{label:"Severe",cls:"sev-sev"}; }
function happyClass(h){ if(h<40)return"happy-low"; if(h<70)return"happy-mid"; return"happy-high"; }
function rollConditions(age,sex,iq){
  const out=[];
  for(const c of conditions){
    let p=c.p;
    p*=(sex==="Male"?(c.mMul||1):(c.fMul||1));
    p*=ageMul(c.ageType||"flat",age);
    p*=iqMul(c.iqType||"flat",iq);
    if(p>0.95)p=0.95;
    if(Math.random()<p) out.push({name:c.name, sev:c.spectrum?rollSeverity():null});
  }
  return out;
}
function childIQ(a,b){ const mid=(a+b)/2; return clamp(Math.round(100+0.6*(mid-100)+gaussian()*11),50,200); }
function childConditions(mom,dad,sex,iq){
  const base=rollConditions(0,sex,iq);
  const have=new Set(base.map(c=>c.name));
  const parentNames=new Set([...mom.conditions.map(c=>c.name),...dad.conditions.map(c=>c.name)]);
  for(const name of parentNames){
    if(have.has(name)) continue;
    const info=condInfo[name]; if(!info) continue;
    const h=(info.herit!==undefined)?info.herit:0.05;
    const both=mom.conditions.some(c=>c.name===name)&&dad.conditions.some(c=>c.name===name);
    const pr=both?Math.min(0.9,h*1.8):h;
    if(Math.random()<pr){ out_push(base,name,info); have.add(name); }
  }
  return base;
}
function out_push(arr,name,info){ arr.push({name:name, sev:info.spectrum?rollSeverity():null}); }

function formatMoney(v){ const a=Math.abs(v),s=v<0?"-":""; if(a>=1e12)return s+"$"+(a/1e12).toFixed(a>=1e13?0:1)+"T"; if(a>=1e9)return s+"$"+(a/1e9).toFixed(a>=1e10?0:1)+"B"; if(a>=1e6)return s+"$"+(a/1e6).toFixed(a>=1e7?0:1)+"M"; return s+"$"+Math.round(a).toLocaleString("en-US"); }
function parseEmoji(el){ if(window.twemoji) twemoji.parse(el,TWEMOJI_OPTS); }
function infoSpan(name){ const d=condInfo[name]?condInfo[name].desc:""; return '<span class="info" data-desc="'+d+'">i</span>'; }
function statusOf(p){ if(p.pregnant)return"Pregnant"; if(p.married)return"Married"; if(p.partner)return"Dating"; return"Single"; }
function byId(map,id){ return map.get(id); }

function addLog(msg,type){ const t=new Date().toTimeString().slice(0,8); log.unshift({t:t,msg:msg,type:type||"info"}); if(log.length>500) log.length=500; if(view==="log") renderLog(); }

function seasonOf(m){ if(m===11||m<=1)return"Winter"; if(m<=4)return"Spring"; if(m<=7)return"Summer"; return"Autumn"; }
function computeTemp(m){ return Math.round(11+11*Math.sin((m-3)/12*2*Math.PI)+(Math.random()*4-2)); }

// ---- sliders ----
function renderSlider(){ const w=slider.clientWidth; const frac=(value-1)/(MAX-1); grab.style.left=(frac*(w-GRAB_W))+"px"; val.textContent=value; }
function renderFert(){ const w=fertSlider.clientWidth; const frac=(fertility-FERT_MIN)/(FERT_MAX-FERT_MIN); fertGrab.style.left=(frac*(w-GRAB_W))+"px"; fertVal.textContent=fertility.toFixed(1); }
function renderSpeedSel(){ document.querySelectorAll(".speedopt").forEach(b=>b.classList.toggle("active",(+b.dataset.i)===speedIdx)); }
let dragA=false, dragB=false;
slider.addEventListener("mousedown",e=>{dragA=true;setSliderX(e.clientX);});
fertSlider.addEventListener("mousedown",e=>{dragB=true;setFertX(e.clientX);});
window.addEventListener("mousemove",e=>{ if(dragA)setSliderX(e.clientX); if(dragB)setFertX(e.clientX); });
window.addEventListener("mouseup",()=>{dragA=false;dragB=false;});
function setSliderX(x){ const r=slider.getBoundingClientRect(); const w=slider.clientWidth; let f=clamp((x-r.left-1-GRAB_W/2)/(w-GRAB_W),0,1); value=Math.round(1+f*(MAX-1)); renderSlider(); }
function setFertX(x){ const r=fertSlider.getBoundingClientRect(); const w=fertSlider.clientWidth; let f=clamp((x-r.left-1-GRAB_W/2)/(w-GRAB_W),0,1); fertility=Math.round((FERT_MIN+f*(FERT_MAX-FERT_MIN))*10)/10; renderFert(); }

function save(){ try{ localStorage.setItem(KEY,JSON.stringify({people,selected,value,fertility,speedIdx,log,view,sortKey,sortDir,tickCount,totalBirths,totalDeaths,temperature})); }catch(e){} }
function load(){ try{ const raw=localStorage.getItem(KEY); if(!raw)return false; const d=JSON.parse(raw); people=d.people||[]; selected=d.selected!==undefined?d.selected:null; value=d.value||10; fertility=d.fertility||1.5; speedIdx=d.speedIdx||0; log=d.log||[]; view=d.view||"dashboard"; sortKey=d.sortKey||"name"; sortDir=d.sortDir||1; tickCount=d.tickCount||0; totalBirths=d.totalBirths||0; totalDeaths=d.totalDeaths||0; temperature=d.temperature||0; return people.length>0; }catch(e){ return false; } }

function showStart(){ pause(); simView.style.display="none"; startView.style.display="block"; renderSlider(); renderFert(); renderSpeedSel(); }
function showSim(){ startView.style.display="none"; simView.style.display="flex"; setView(view); }

function setView(v){
  view=v;
  const dash=v==="dashboard";
  dashboard.style.display=dash?"flex":"none";
  logScreen.style.display=dash?"none":"flex";
  tabDash.classList.toggle("active",dash);
  tabLog.classList.toggle("active",!dash);
  if(dash){ renderSortBar(); renderStats(); renderList(); renderProfile(); renderWorld(); }
  else renderLog();
  save();
}

function sortCompare(a,b){ let d; if(sortKey==="name")d=a.name.localeCompare(b.name); else d=(a[sortKey]||0)-(b[sortKey]||0); return d*sortDir; }
function setSort(key){ if(sortKey===key)sortDir=-sortDir; else{sortKey=key;sortDir=(key==="name")?1:-1;} save(); renderSortBar(); renderList(); }
function renderSortBar(){ document.querySelectorAll(".sortbtn").forEach(b=>{ const base=b.dataset.label; if(b.dataset.key===sortKey){ b.classList.add("active"); b.textContent=base+(sortDir===1?" ▲":" ▼"); } else { b.classList.remove("active"); b.textContent=base; } }); }

function renderList(){
  const term=searchTerm.toLowerCase();
  const arr=(term?people.filter(p=>p.name.toLowerCase().includes(term)):people.slice());
  arr.sort(sortCompare);
  list.innerHTML="";
  const frag=document.createDocumentFragment();
  arr.forEach(p=>{
    const row=document.createElement("div");
    row.className="row"+(p.id===selected?" selected":"");
    row.dataset.id=p.id;
    const name=document.createElement("span");
    name.className="row-name";
    name.textContent=p.name;
    const kill=document.createElement("button");
    kill.className="kill"; kill.textContent="✕"; kill.title="Kill";
    kill.addEventListener("click",e=>{ e.stopPropagation(); killPerson(p.id); });
    row.appendChild(name); row.appendChild(kill);
    row.addEventListener("click",()=>setSelected(p.id));
    frag.appendChild(row);
  });
  list.appendChild(frag);
  listHead.textContent=term?("People ("+arr.length+"/"+people.length+")"):("People ("+people.length+")");
}

function setSelected(id){ selected=(selected===id)?null:id; [...list.children].forEach(c=>c.classList.toggle("selected",c.dataset.id===selected)); save(); renderProfile(); }

function killPerson(id){
  const p=people.find(x=>x.id===id);
  people=people.filter(x=>x.id!==id);
  if(p&&p.partner){ const q=people.find(x=>x.id===p.partner); if(q){ q.partner=null; q.married=false; q.happiness=clamp(q.happiness-25,0,100); } }
  if(selected===id) selected=null;
  if(p) addLog(p.name+" was killed.","kill");
  save(); renderStats(); renderList(); renderProfile(); renderWorld();
}

function relName(map,id){ const r=map.get(id); return r?('<span class="rel-link" data-id="'+id+'">'+r.name+'</span>'):'<span class="dim">(deceased)</span>'; }

function renderProfile(){
  const p=people.find(x=>x.id===selected);
  if(!p){ cardSlot.innerHTML='<div class="placeholder-box">Click a profile to open it</div>'; return; }
  const oldBody=cardSlot.querySelector(".card-body");
  const keepScroll=oldBody?oldBody.scrollTop:0;
  const map=new Map(people.map(x=>[x.id,x]));
  const condHtml=p.conditions.length?p.conditions.map(c=>{
    const nl='<div class="cond-name"><span>'+c.name+'</span>'+infoSpan(c.name)+'</div>';
    if(c.sev==null) return '<div class="cond">'+nl+'</div>';
    const i=sevInfo(c.sev);
    return '<div class="cond">'+nl+'<div class="cond-bar"><div class="cond-fill '+i.cls+'" style="width:'+c.sev+'%"></div></div><div class="cond-meta">'+i.label+' &middot; '+c.sev+'%</div></div>';
  }).join(""):'<div class="cond dim">None</div>';

  const partnerHtml = p.partner?relName(map,p.partner):'<span class="dim">—</span>';
  const parentsHtml = (p.parents&&p.parents.length)?p.parents.map(id=>relName(map,id)).join(", "):'<span class="dim">—</span>';
  const childrenHtml = (p.children&&p.children.length)?p.children.map(id=>relName(map,id)).join(", "):'<span class="dim">—</span>';
  const moneyCls=p.money<0?"money-neg":"money-pos";
  const salaryTxt=p.salary>0?(formatMoney(p.salary)+"/yr"):"—";

  cardSlot.innerHTML=
    '<div class="card">'+
      '<div class="card-name"><span class="card-name-text">'+p.name+'</span><span class="card-name-flags">'+p.flags.join(" ")+'</span></div>'+
      '<div class="card-body">'+
        '<div class="card-row2"><span class="c2"><span class="card-key">Sex</span><span class="card-val">'+p.sex+'</span></span><span class="c2"><span class="card-key">Age</span><span class="card-val">'+p.age+'</span></span></div>'+
        '<div class="card-row2"><span class="c2"><span class="card-key">IQ</span><span class="card-val">'+p.iq+'</span></span><span class="c2"><span class="card-key">Type</span><span class="card-val">'+p.mbti+'</span></span></div>'+
        '<div class="card-row2"><span class="c2"><span class="card-key">Gen</span><span class="card-val">'+p.gen+'</span></span><span class="c2"><span class="card-key">Happy</span><span class="card-val '+happyClass(p.happiness)+'">'+p.happiness+'</span></span></div>'+
        '<div class="card-row"><span class="card-key">Orientation</span><span class="card-val">'+p.orientation+'</span></div>'+
        '<div class="card-row"><span class="card-key">Job</span><span class="card-val">'+p.job+'</span></div>'+
        '<div class="card-row"><span class="card-key">Salary</span><span class="card-val">'+salaryTxt+'</span></div>'+
        '<div class="card-row"><span class="card-key">Net worth</span><span class="card-val '+moneyCls+'">'+formatMoney(p.money)+'</span></div>'+
        '<div class="card-row"><span class="card-key">ID</span><span class="card-val card-id">'+p.id+'</span></div>'+
        '<div class="card-sub">Relationships</div>'+
        '<div class="card-row"><span class="card-key">Status</span><span class="card-val">'+statusOf(p)+'</span></div>'+
        '<div class="card-rel"><span class="card-key">Partner</span>'+partnerHtml+'</div>'+
        '<div class="card-rel"><span class="card-key">Parents</span>'+parentsHtml+'</div>'+
        '<div class="card-rel"><span class="card-key">Children</span>'+childrenHtml+'</div>'+
        '<div class="card-sub">Conditions</div>'+
        condHtml+
      '</div>'+
    '</div>';

  const nameEl=cardSlot.querySelector(".card-name");
  if(nameEl) nameEl.addEventListener("click",()=>setSelected(selected));
  cardSlot.querySelectorAll(".rel-link").forEach(el=>{ el.addEventListener("click",()=>setSelected(el.dataset.id)); });
  const newBody=cardSlot.querySelector(".card-body");
  if(newBody) newBody.scrollTop=keepScroll;
  parseEmoji(cardSlot);
}

function statRow(k,v){ return '<div class="stat-row"><span class="stat-key">'+k+'</span><span class="stat-val">'+v+'</span></div>'; }
function stat2(k1,v1,k2,v2){ let h='<div class="stat-row2"><span class="s2"><span class="stat-key">'+k1+'</span><span class="stat-val">'+v1+'</span></span>'; if(k2!=="")h+='<span class="s2"><span class="stat-key">'+k2+'</span><span class="stat-val">'+v2+'</span></span>'; return h+'</div>'; }

function renderStats(){
  const n=people.length;
  if(!n){ stats.innerHTML='<div class="dim" style="padding:6px 8px">No population.</div>'; return; }
  let male=0,ageSum=0,happySum=0,iqSum=0,maxIQ=0,gifted=0,withCond=0,totalConds=0,mil=0,bil=0,tril=0,debt=0,married=0,partnered=0,pregnant=0;
  const flagCount={},condCount={};
  for(const p of people){
    if(p.sex==="Male")male++;
    ageSum+=p.age; happySum+=p.happiness; iqSum+=p.iq;
    if(p.iq>maxIQ)maxIQ=p.iq; if(p.iq>=130)gifted++;
    if(p.money>=1e12)tril++; else if(p.money>=1e9)bil++; else if(p.money>=1e6)mil++;
    if(p.money<0)debt++;
    if(p.married)married++; else if(p.partner)partnered++;
    if(p.pregnant)pregnant++;
    if(p.conditions.length)withCond++;
    for(const f of p.flags) flagCount[f]=(flagCount[f]||0)+1;
    for(const c of p.conditions){ condCount[c.name]=(condCount[c.name]||0)+1; totalConds++; }
  }
  const pct=x=>Math.round((x/n)*100);
  const flagTotal=Object.values(flagCount).reduce((a,b)=>a+b,0);
  const topFlags=Object.entries(flagCount).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const condList=conditions.map(c=>({name:c.name,cnt:condCount[c.name]||0,p:c.p})).sort((a,b)=>b.cnt-a.cnt||b.p-a.p);

  let html="";
  html+=stat2("Population",n,"Avg. age",Math.round(ageSum/n));
  html+=stat2("Male",pct(male)+"%","Female",pct(n-male)+"%");
  html+=stat2("Avg. IQ",Math.round(iqSum/n),"Top IQ",maxIQ);
  html+=stat2("Gifted 130+",pct(gifted)+"%","In debt",pct(debt)+"%");
  html+=stat2("Avg. happy",Math.round(happySum/n),"&ge;1 condition",pct(withCond)+"%");
  html+=stat2("Millionaires",mil,"Billionaires",bil);
  html+=stat2("Trillionaires",tril,"Avg. cond.",(totalConds/n).toFixed(2));
  html+='<div class="stat-sub">Relationships</div>';
  html+=stat2("Married",pct(married)+"%","Dating",pct(partnered)+"%");
  html+=statRow("Pregnant",pregnant);
  html+='<div class="stat-sub">Top origins</div>';
  for(const [f,c] of topFlags) html+='<div class="stat-row"><span class="stat-flag">'+f+" "+(flagNames[f]||"")+'</span><span class="stat-val">'+Math.round((c/flagTotal)*100)+"%</span></div>";
  html+='<div class="stat-sub">Conditions</div>';
  for(const c of condList) html+='<div class="stat-row"><span class="stat-key">'+c.name+' '+infoSpan(c.name)+'</span><span class="stat-val">'+pct(c.cnt)+'% <span class="stat-dim">('+c.cnt+')</span></span></div>';

  stats.innerHTML=html;
  parseEmoji(stats);
}

function renderLog(){ if(!log.length){ logBody.innerHTML='<div class="dim">No events yet.</div>'; return; } logBody.innerHTML=log.map(e=>'<div class="log-line log-'+e.type+'"><span class="log-time">'+e.t+'</span>'+e.msg+'</div>').join(""); }

function renderWorld(){
  const m=tickCount%12, y=Math.floor(tickCount/12);
  wbTime.innerHTML="Year "+y+" &middot; "+MONTHS[m];
  wbSeason.textContent=seasonOf(m);
  wbTemp.textContent=temperature+"°C";
  wbPop.textContent=people.length;
  wbBirths.textContent=totalBirths;
  wbDeaths.textContent=totalDeaths;
  playBtn.textContent=playing?"⏸ Pause":"▶ Play";
  playBtn.classList.toggle("playing",playing);
  speedBtn.textContent=SPEEDS[speedIdx].label;
}

// ---- births / matching ----
function makeChild(mom,dadId,used,map){
  const dad=map.get(dadId);
  const sex=Math.random()<0.5?"Male":"Female";
  const pool=[...new Set([...(mom.flags||[]),...((dad&&dad.flags)||[])])];
  const primary=randPick(pool);
  const childFlags=[primary];
  const extra=pool.filter(f=>f!==primary);
  if(extra.length&&Math.random()<0.5) childFlags.push(randPick(extra));
  const iq=childIQ(mom.iq,(dad?dad.iq:mom.iq));
  const surname=dad?(dad.name.split(" ").slice(1).join(" ")||surnameFor(primary)):surnameFor(primary);
  const name=firstName(primary,sex)+" "+surname;
  const conds=childConditions(mom,dad||mom,sex,iq);
  return {
    id:makeId(used), name:name, sex:sex, age:0, iq:iq, money:0, salary:0, job:"Child",
    happiness:rollHappiness(), mbti:weightedChoice(mbtiTypes,mbtiWeights), flags:childFlags,
    orientation:rollOrientation(), conditions:conds, gen:Math.max(mom.gen,dad?dad.gen:0)+1,
    parents:[mom.id,dadId], children:[],
    partner:null, relStart:0, married:false, marriedTick:0,
    pregnant:false, pregTick:0, pregPartner:null, pregFail:false, failMonth:0
  };
}

function matchCross(arrA,arrB){ shuffle(arrA); shuffle(arrB); const pairs=[]; const usedB=new Set(); for(const a of arrA){ for(let j=0;j<arrB.length;j++){ if(usedB.has(j))continue; const b=arrB[j]; if(Math.abs(a.age-b.age)>18)continue; const shared=a.flags.some(f=>b.flags.includes(f)); if(Math.random()<(shared?0.9:0.45)){ pairs.push([a,b]); usedB.add(j); break; } } } return pairs; }
function matchSame(arr){ shuffle(arr); const pairs=[]; const used=new Set(); for(let i=0;i<arr.length;i++){ if(used.has(i))continue; for(let j=i+1;j<arr.length;j++){ if(used.has(j))continue; const a=arr[i],b=arr[j]; if(Math.abs(a.age-b.age)>18)continue; const shared=a.flags.some(f=>b.flags.includes(f)); if(Math.random()<(shared?0.9:0.45)){ pairs.push([a,b]); used.add(i); used.add(j); break; } } } return pairs; }

function updateJob(p){
  if(p.age>=67){ if(p.job!=="Retired"){ p.job="Retired"; p.salary=0; addLog(p.name+" retired.","job"); } return; }
  if(p.age>=18&&(p.job==="Student"||p.job==="Child")){ const j=assignJob(p.age,p.iq,p.money); p.job=j.job; p.salary=j.salary; if(j.salary>0) addLog(p.name+" started work as "+j.job+".","job"); return; }
  if(p.age>=6&&p.age<18&&p.job==="Child"){ p.job="Student"; return; }
  if(p.age<18) return;
  if(p.salary>0){
    if(Math.random()<0.008){ p.job="Unemployed"; p.salary=0; p.happiness=clamp(p.happiness-15,0,100); addLog(p.name+" was fired.","job"); }
    else if(Math.random()<0.01){ const j=assignJob(p.age,p.iq,p.money); p.job=j.job; p.salary=j.salary; }
  } else if(p.job==="Unemployed"){
    if(Math.random()<0.08){ const j=assignJob(p.age,p.iq,p.money); if(j.salary>0){ p.job=j.job; p.salary=j.salary; p.happiness=clamp(p.happiness+10,0,100); addLog(p.name+" was hired as "+j.job+".","job"); } }
  }
}
function monthlyMoneyChange(p){
  if(p.age<18) return Math.round((Math.random()-0.4)*50);
  const income=p.salary/12;
  if(income<=0) return -randInt(300,1800);
  const rate=0.08+Math.random()*0.22;
  let change=income*rate + (Math.random()-0.5)*income*0.15;
  return Math.round(change);
}

function stepTick(){
  tickCount++;
  const m=tickCount%12;
  const newYear=(m===0);
  temperature=computeTemp(m);

  // per-person: age, death roll, drift, money, jobs
  const dead=[];
  for(const p of people){
    if(newYear) p.age=Math.min(120,p.age+1);
    const annual=Math.min(0.95,6.7e-5*Math.exp(0.085*p.age));
    const monthly=1-Math.pow(1-annual,1/12);
    if(Math.random()<monthly){ dead.push(p); continue; }
    if(p.age>=13 && p.happiness<8 && Math.random()<(8-p.happiness)/8*0.02){ p.bySuicide=true; dead.push(p); continue; }
    p.happiness=clamp(p.happiness+Math.round((Math.random()-0.5)*4),0,100);
    p.money+=monthlyMoneyChange(p);
    updateJob(p);
  }

  // process deaths
  if(dead.length){
    const map=new Map(people.map(p=>[p.id,p]));
    for(const p of dead){
      totalDeaths++;
      if(p.bySuicide){ p.bySuicide=false; addLog(p.name+" died by suicide at age "+p.age+".","death"); }
      else addLog(p.name+" died at age "+p.age+".","death");
      if(p.partner){ const q=map.get(p.partner); if(q&&!dead.includes(q)){ q.partner=null; q.married=false; q.happiness=clamp(q.happiness-25,0,100); } }
      if(selected===p.id) selected=null;
    }
    const deadSet=new Set(dead.map(p=>p.id));
    people=people.filter(p=>!deadSet.has(p.id));
  }

  const map=new Map(people.map(p=>[p.id,p]));

  // pairing
  const singles=people.filter(p=>p.age>=18&&!p.partner);
  const seekers=singles.filter(()=>Math.random()<SEEK_CHANCE);
  const sm=seekers.filter(p=>p.orientation==="Straight"&&p.sex==="Male");
  const sf=seekers.filter(p=>p.orientation==="Straight"&&p.sex==="Female");
  const gm=seekers.filter(p=>p.orientation==="Gay"&&p.sex==="Male");
  const gf=seekers.filter(p=>p.orientation==="Gay"&&p.sex==="Female");
  const pairs=[...matchCross(sm,sf),...matchSame(gm),...matchSame(gf)];
  for(const [a,b] of pairs){ a.partner=b.id; b.partner=a.id; a.relStart=tickCount; b.relStart=tickCount; a.married=false; b.married=false; addLog(a.name+" and "+b.name+" started dating.","love"); }

  // marriage + conception (process each couple once)
  for(const p of people){
    if(!p.partner) continue;
    const q=map.get(p.partner);
    if(!q||q.partner!==p.id) continue;
    if(p.id>q.id) continue;
    if(!p.married && (tickCount-p.relStart)>=36 && Math.random()<0.10){
      p.married=true; q.married=true; p.marriedTick=tickCount; q.marriedTick=tickCount;
      p.happiness=clamp(p.happiness+15,0,100); q.happiness=clamp(q.happiness+15,0,100);
      addLog(p.name+" and "+q.name+" got married.","love");
    }
    if(p.married && (tickCount-p.marriedTick)>=3){
      let female=null,male=null;
      if(p.sex==="Female"&&q.sex==="Male"){female=p;male=q;}
      else if(q.sex==="Female"&&p.sex==="Male"){female=q;male=p;}
      if(female&&!female.pregnant&&female.age>=18&&female.age<=50 && Math.random()<0.10*fertility){
        female.pregnant=true; female.pregTick=tickCount; female.pregPartner=male.id;
        female.pregFail=Math.random()<0.12; female.failMonth=female.pregFail?randInt(1,8):0;
        female.happiness=clamp(female.happiness+8,0,100);
        addLog(female.name+" is pregnant.","love");
      }
    }
  }

  // pregnancy progression / births
  const newborns=[];
  const used=new Set(people.map(p=>p.id));
  for(const f of people){
    if(!f.pregnant) continue;
    const months=tickCount-f.pregTick;
    if(f.pregFail && months>=f.failMonth){
      f.pregnant=false; f.happiness=clamp(f.happiness-20,0,100);
      const dad=map.get(f.pregPartner); if(dad) dad.happiness=clamp(dad.happiness-12,0,100);
      addLog(f.name+" lost a pregnancy.","death");
    } else if(months>=9){
      f.pregnant=false;
      const child=makeChild(f,f.pregPartner,used,map);
      const dad=map.get(f.pregPartner);
      f.children.push(child.id); if(dad) dad.children.push(child.id);
      f.happiness=clamp(f.happiness+18,0,100); if(dad) dad.happiness=clamp(dad.happiness+15,0,100);
      newborns.push(child); totalBirths++;
      addLog((dad?dad.name+" and ":"")+f.name+" had a child: "+child.name+".","birth");
    }
  }
  for(const c of newborns) people.push(c);

  if(view==="dashboard"){ renderWorld(); renderStats(); renderList(); renderProfile(); }
  if(!playing || tickCount%6===0) save();
}

function play(){ if(playing)return; playing=true; intervalId=setInterval(stepTick,SPEEDS[speedIdx].ms); renderWorld(); }
function pause(){ playing=false; if(intervalId)clearInterval(intervalId); intervalId=null; renderWorld(); save(); }

function generate(){
  const used=new Set();
  people=[];
  for(let i=0;i<value;i++){
    const sex=Math.random()<0.5?"Male":"Female";
    const age=rollAge();
    const iq=rollIQ();
    const flagList=pickFlags();
    const money=rollMoney(age,iq);
    const j=assignJob(age,iq,money);
    people.push({
      id:makeId(used), name:makeName(flagList[0],sex), sex:sex, age:age, iq:iq, money:money,
      salary:j.salary, job:j.job, happiness:rollHappiness(), mbti:weightedChoice(mbtiTypes,mbtiWeights),
      flags:flagList, orientation:rollOrientation(), conditions:rollConditions(age,sex,iq),
      gen:0, parents:[], children:[],
      partner:null, relStart:0, married:false, marriedTick:0,
      pregnant:false, pregTick:0, pregPartner:null, pregFail:false, failMonth:0
    });
  }
  selected=null; searchTerm=""; search.value="";
  tickCount=0; totalBirths=0; totalDeaths=0; temperature=computeTemp(0);
  log=[]; addLog("Spawned "+value+" people.","spawn");
  pause();
  save(); showSim();
}

gen.addEventListener("click",generate);
search.addEventListener("input",()=>{ searchTerm=search.value; renderList(); });
tabDash.addEventListener("click",()=>setView("dashboard"));
tabLog.addEventListener("click",()=>setView("log"));
document.querySelectorAll(".sortbtn").forEach(b=>b.addEventListener("click",()=>setSort(b.dataset.key)));
playBtn.addEventListener("click",()=>{ playing?pause():play(); });
stepBtn.addEventListener("click",()=>{ if(playing)pause(); stepTick(); save(); });
speedBtn.addEventListener("click",()=>{ speedIdx=(speedIdx+1)%SPEEDS.length; renderSpeedSel(); if(playing){ clearInterval(intervalId); intervalId=setInterval(stepTick,SPEEDS[speedIdx].ms); } renderWorld(); save(); });
document.querySelectorAll(".speedopt").forEach(b=>b.addEventListener("click",()=>{ speedIdx=+b.dataset.i; renderSpeedSel(); if(playing){ clearInterval(intervalId); intervalId=setInterval(stepTick,SPEEDS[speedIdx].ms); } renderWorld(); save(); }));
reset.addEventListener("click",()=>{ pause(); localStorage.removeItem(KEY); people=[]; selected=null; value=10; fertility=1.5; searchTerm=""; search.value=""; log=[]; view="dashboard"; sortKey="name"; sortDir=1; tickCount=0; totalBirths=0; totalDeaths=0; showStart(); });

document.addEventListener("mouseover",e=>{ const el=e.target.closest?e.target.closest(".info"):null; if(el&&el.dataset.desc) showTip(el.dataset.desc,e.clientX,e.clientY); });
document.addEventListener("mousemove",e=>{ if(tip.style.display!=="block")return; const el=e.target.closest?e.target.closest(".info"):null; if(el&&el.dataset.desc) showTip(el.dataset.desc,e.clientX,e.clientY); else hideTip(); });
document.addEventListener("mouseout",e=>{ if(e.target.closest&&e.target.closest(".info")) hideTip(); });
function showTip(text,x,y){ tip.textContent=text; tip.style.display="block"; const pad=14; const r=tip.getBoundingClientRect(); let tx=x+pad,ty=y+pad; if(tx+r.width>window.innerWidth-6)tx=x-r.width-pad; if(ty+r.height>window.innerHeight-6)ty=y-r.height-pad; tip.style.left=Math.max(6,tx)+"px"; tip.style.top=Math.max(6,ty)+"px"; }
function hideTip(){ tip.style.display="none"; }

if(load()){ showSim(); } else { showStart(); }
