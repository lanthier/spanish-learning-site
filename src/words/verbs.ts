import { Verb } from "../models/verb";

export const verbs: Array<Verb> = [
  {
    name: "comer",
    englishMeaning: "to eat",
    conjugation: {
      present: {
        yo: "como",
        tu: "comes",
        elEllaUsted: "come",
        nosotros: "comemos",
        ellosEllasUstedes: "comen"
      },
      preterite: {
        yo: "com\xED",
        tu: "comiste",
        elEllaUsted: "comi\xF3",
        nosotros: "comimos",
        ellosEllasUstedes: "comieron"
      },
      imperfect: {
        yo: "com\xEDa",
        tu: "com\xEDas",
        elEllaUsted: "com\xEDa",
        nosotros: "com\xEDamos",
        ellosEllasUstedes: "com\xEDan"
      },
      conditional: {
        yo: "comer\xEDa",
        tu: "comer\xEDas",
        elEllaUsted: "comer\xEDa",
        nosotros: "comer\xEDamos",
        ellosEllasUstedes: "comer\xEDan"
      },
      future: {
        yo: "comer\xE9",
        tu: "comer\xE1s",
        elEllaUsted: "comer\xE1",
        nosotros: "comeremos",
        ellosEllasUstedes: "comer\xE1n"
      }
    }
  },
  {
    name: "jugar",
    englishMeaning: "to play",
    conjugation: {
      present: {
        yo: "juego",
        tu: "juegas",
        elEllaUsted: "juega",
        nosotros: "jugamos",
        ellosEllasUstedes: "juegan",
        irregular: true
      },
      preterite: {
        yo: "jugu\xE9",
        tu: "jugaste",
        elEllaUsted: "jug\xF3",
        nosotros: "jugamos",
        ellosEllasUstedes: "jugaron",
        irregular: true
      },
      imperfect: {
        yo: "jugaba",
        tu: "jugabas",
        elEllaUsted: "jugaba",
        nosotros: "jug\xE1bamos",
        ellosEllasUstedes: "jugaban"
      },
      conditional: {
        yo: "jugar\xEDa",
        tu: "jugar\xEDas",
        elEllaUsted: "jugar\xEDa",
        nosotros: "jugar\xEDamos",
        ellosEllasUstedes: "jugar\xEDan"
      },
      future: {
        yo: "jugar\xE9",
        tu: "jugar\xE1s",
        elEllaUsted: "jugar\xE1",
        nosotros: "jugaremos",
        ellosEllasUstedes: "jugar\xE1n"
      }
    }
  },
  {
    name: "vivir",
    englishMeaning: "to live",
    conjugation: {
      present: {
        yo: "vivo",
        tu: "vives",
        elEllaUsted: "vive",
        nosotros: "vivimos",
        ellosEllasUstedes: "viven"
      },
      preterite: {
        yo: "viv\xED",
        tu: "viviste",
        elEllaUsted: "vivi\xF3",
        nosotros: "vivimos",
        ellosEllasUstedes: "vivieron"
      },
      imperfect: {
        yo: "viv\xEDa",
        tu: "viv\xEDas",
        elEllaUsted: "viv\xEDa",
        nosotros: "viv\xEDamos",
        ellosEllasUstedes: "viv\xEDan"
      },
      conditional: {
        yo: "vivir\xEDa",
        tu: "vivir\xEDas",
        elEllaUsted: "vivir\xEDa",
        nosotros: "vivir\xEDamos",
        ellosEllasUstedes: "vivir\xEDan"
      },
      future: {
        yo: "vivir\xE9",
        tu: "vivir\xE1s",
        elEllaUsted: "vivir\xE1",
        nosotros: "viviremos",
        ellosEllasUstedes: "vivir\xE1n"
      }
    }
  },
  {
    name: "ense\xF1ar",
    englishMeaning: "to teach",
    conjugation: {
      present: {
        yo: "ense\xF1o",
        tu: "ense\xF1as",
        elEllaUsted: "ense\xF1a",
        nosotros: "ense\xF1amos",
        ellosEllasUstedes: "ense\xF1an"
      },
      preterite: {
        yo: "ense\xF1\xE9",
        tu: "ense\xF1aste",
        elEllaUsted: "ense\xF1\xF3",
        nosotros: "ense\xF1amos",
        ellosEllasUstedes: "ense\xF1aron"
      },
      imperfect: {
        yo: "ense\xF1aba",
        tu: "ense\xF1abas",
        elEllaUsted: "ense\xF1aba",
        nosotros: "ense\xF1\xE1bamos",
        ellosEllasUstedes: "ense\xF1aban"
      },
      conditional: {
        yo: "ense\xF1ar\xEDa",
        tu: "ense\xF1ar\xEDas",
        elEllaUsted: "ense\xF1ar\xEDa",
        nosotros: "ense\xF1ar\xEDamos",
        ellosEllasUstedes: "ense\xF1ar\xEDan"
      },
      future: {
        yo: "ense\xF1ar\xE9",
        tu: "ense\xF1ar\xE1s",
        elEllaUsted: "ense\xF1ar\xE1",
        nosotros: "ense\xF1aremos",
        ellosEllasUstedes: "ense\xF1ar\xE1n"
      }
    }
  },
  {
    name: "estudiar",
    englishMeaning: "to study",
    conjugation: {
      present: {
        yo: "estudio",
        tu: "estudias",
        elEllaUsted: "estudia",
        nosotros: "estudiamos",
        ellosEllasUstedes: "estudian"
      },
      preterite: {
        yo: "estudi\xE9",
        tu: "estudiaste",
        elEllaUsted: "estudi\xF3",
        nosotros: "estudiamos",
        ellosEllasUstedes: "estudiaron"
      },
      imperfect: {
        yo: "estudiaba",
        tu: "estudiabas",
        elEllaUsted: "estudiaba",
        nosotros: "estudi\xE1bamos",
        ellosEllasUstedes: "estudiaban"
      },
      conditional: {
        yo: "estudiar\xEDa",
        tu: "estudiar\xEDas",
        elEllaUsted: "estudiar\xEDa",
        nosotros: "estudiar\xEDamos",
        ellosEllasUstedes: "estudiar\xEDan"
      },
      future: {
        yo: "estudiar\xE9",
        tu: "estudiar\xE1s",
        elEllaUsted: "estudiar\xE1",
        nosotros: "estudiaremos",
        ellosEllasUstedes: "estudiar\xE1n"
      }
    }
  },
  {
    name: "dibujar",
    englishMeaning: "to draw",
    conjugation: {
      present: {
        yo: "dibujo",
        tu: "dibujas",
        elEllaUsted: "dibuja",
        nosotros: "dibujamos",
        ellosEllasUstedes: "dibujan"
      },
      preterite: {
        yo: "dibuj\xE9",
        tu: "dibujaste",
        elEllaUsted: "dibuj\xF3",
        nosotros: "dibujamos",
        ellosEllasUstedes: "dibujaron"
      },
      imperfect: {
        yo: "dibujaba",
        tu: "dibujabas",
        elEllaUsted: "dibujaba",
        nosotros: "dibuj\xE1bamos",
        ellosEllasUstedes: "dibujaban"
      },
      conditional: {
        yo: "dibujar\xEDa",
        tu: "dibujar\xEDas",
        elEllaUsted: "dibujar\xEDa",
        nosotros: "dibujar\xEDamos",
        ellosEllasUstedes: "dibujar\xEDan"
      },
      future: {
        yo: "dibujar\xE9",
        tu: "dibujar\xE1s",
        elEllaUsted: "dibujar\xE1",
        nosotros: "dibujaremos",
        ellosEllasUstedes: "dibujar\xE1n"
      }
    }
  },
  {
    name: "tocar",
    englishMeaning: "to touch, play an instrument",
    conjugation: {
      present: {
        yo: "toco",
        tu: "tocas",
        elEllaUsted: "toca",
        nosotros: "tocamos",
        ellosEllasUstedes: "tocan"
      },
      preterite: {
        yo: "toqu\xE9",
        tu: "tocaste",
        elEllaUsted: "toc\xF3",
        nosotros: "tocamos",
        ellosEllasUstedes: "tocaron",
        irregular: true
      },
      imperfect: {
        yo: "tocaba",
        tu: "tocabas",
        elEllaUsted: "tocaba",
        nosotros: "toc\xE1bamos",
        ellosEllasUstedes: "tocaban"
      },
      conditional: {
        yo: "tocar\xEDa",
        tu: "tocar\xEDas",
        elEllaUsted: "tocar\xEDa",
        nosotros: "tocar\xEDamos",
        ellosEllasUstedes: "tocar\xEDan"
      },
      future: {
        yo: "tocar\xE9",
        tu: "tocar\xE1s",
        elEllaUsted: "tocar\xE1",
        nosotros: "tocaremos",
        ellosEllasUstedes: "tocar\xE1n"
      }
    }
  },
  {
    name: "caminar",
    englishMeaning: "to walk",
    conjugation: {
      present: {
        yo: "camino",
        tu: "caminas",
        elEllaUsted: "camina",
        nosotros: "caminamos",
        ellosEllasUstedes: "caminan"
      },
      preterite: {
        yo: "camin\xE9",
        tu: "caminaste",
        elEllaUsted: "camin\xF3",
        nosotros: "caminamos",
        ellosEllasUstedes: "caminaron"
      },
      imperfect: {
        yo: "caminaba",
        tu: "caminabas",
        elEllaUsted: "caminaba",
        nosotros: "camin\xE1bamos",
        ellosEllasUstedes: "caminaban"
      },
      conditional: {
        yo: "caminar\xEDa",
        tu: "caminar\xEDas",
        elEllaUsted: "caminar\xEDa",
        nosotros: "caminar\xEDamos",
        ellosEllasUstedes: "caminar\xEDan"
      },
      future: {
        yo: "caminar\xE9",
        tu: "caminar\xE1s",
        elEllaUsted: "caminar\xE1",
        nosotros: "caminaremos",
        ellosEllasUstedes: "caminar\xE1n"
      }
    }
  },
  {
    name: "usar",
    englishMeaning: "to use",
    conjugation: {
      present: {
        yo: "uso",
        tu: "usas",
        elEllaUsted: "usa",
        nosotros: "usamos",
        ellosEllasUstedes: "usan"
      },
      preterite: {
        yo: "us\xE9",
        tu: "usaste",
        elEllaUsted: "us\xF3",
        nosotros: "usamos",
        ellosEllasUstedes: "usaron"
      },
      imperfect: {
        yo: "usaba",
        tu: "usabas",
        elEllaUsted: "usaba",
        nosotros: "us\xE1bamos",
        ellosEllasUstedes: "usaban"
      },
      conditional: {
        yo: "usar\xEDa",
        tu: "usar\xEDas",
        elEllaUsted: "usar\xEDa",
        nosotros: "usar\xEDamos",
        ellosEllasUstedes: "usar\xEDan"
      },
      future: {
        yo: "usar\xE9",
        tu: "usar\xE1s",
        elEllaUsted: "usar\xE1",
        nosotros: "usaremos",
        ellosEllasUstedes: "usar\xE1n"
      }
    }
  },
  {
    name: "olvidar",
    englishMeaning: "to forget",
    conjugation: {
      present: {
        yo: "olvido",
        tu: "olvidas",
        elEllaUsted: "olvida",
        nosotros: "olvidamos",
        ellosEllasUstedes: "olvidan"
      },
      preterite: {
        yo: "olvid\xE9",
        tu: "olvidaste",
        elEllaUsted: "olvid\xF3",
        nosotros: "olvidamos",
        ellosEllasUstedes: "olvidaron"
      },
      imperfect: {
        yo: "olvidaba",
        tu: "olvidabas",
        elEllaUsted: "olvidaba",
        nosotros: "olvid\xE1bamos",
        ellosEllasUstedes: "olvidaban"
      },
      conditional: {
        yo: "olvidar\xEDa",
        tu: "olvidar\xEDas",
        elEllaUsted: "olvidar\xEDa",
        nosotros: "olvidar\xEDamos",
        ellosEllasUstedes: "olvidar\xEDan"
      },
      future: {
        yo: "olvidar\xE9",
        tu: "olvidar\xE1s",
        elEllaUsted: "olvidar\xE1",
        nosotros: "olvidaremos",
        ellosEllasUstedes: "olvidar\xE1n"
      }
    }
  },
  {
    name: "viajar",
    englishMeaning: "to travel",
    conjugation: {
      present: {
        yo: "viajo",
        tu: "viajas",
        elEllaUsted: "viaja",
        nosotros: "viajamos",
        ellosEllasUstedes: "viajan"
      },
      preterite: {
        yo: "viaj\xE9",
        tu: "viajaste",
        elEllaUsted: "viaj\xF3",
        nosotros: "viajamos",
        ellosEllasUstedes: "viajaron"
      },
      imperfect: {
        yo: "viajaba",
        tu: "viajabas",
        elEllaUsted: "viajaba",
        nosotros: "viaj\xE1bamos",
        ellosEllasUstedes: "viajaban"
      },
      conditional: {
        yo: "viajar\xEDa",
        tu: "viajar\xEDas",
        elEllaUsted: "viajar\xEDa",
        nosotros: "viajar\xEDamos",
        ellosEllasUstedes: "viajar\xEDan"
      },
      future: {
        yo: "viajar\xE9",
        tu: "viajar\xE1s",
        elEllaUsted: "viajar\xE1",
        nosotros: "viajaremos",
        ellosEllasUstedes: "viajar\xE1n"
      }
    }
  },
  {
    name: "trabajar",
    englishMeaning: "to work",
    conjugation: {
      present: {
        yo: "trabajo",
        tu: "trabajas",
        elEllaUsted: "trabaja",
        nosotros: "trabajamos",
        ellosEllasUstedes: "trabajan"
      },
      preterite: {
        yo: "trabaj\xE9",
        tu: "trabajaste",
        elEllaUsted: "trabaj\xF3",
        nosotros: "trabajamos",
        ellosEllasUstedes: "trabajaron"
      },
      imperfect: {
        yo: "trabajaba",
        tu: "trabajabas",
        elEllaUsted: "trabajaba",
        nosotros: "trabaj\xE1bamos",
        ellosEllasUstedes: "trabajaban"
      },
      conditional: {
        yo: "trabajar\xEDa",
        tu: "trabajar\xEDas",
        elEllaUsted: "trabajar\xEDa",
        nosotros: "trabajar\xEDamos",
        ellosEllasUstedes: "trabajar\xEDan"
      },
      future: {
        yo: "trabajar\xE9",
        tu: "trabajar\xE1s",
        elEllaUsted: "trabajar\xE1",
        nosotros: "trabajaremos",
        ellosEllasUstedes: "trabajar\xE1n"
      }
    }
  },
  {
    name: "tomar",
    englishMeaning: "to take, drink",
    conjugation: {
      present: {
        yo: "tomo",
        tu: "tomas",
        elEllaUsted: "toma",
        nosotros: "tomamos",
        ellosEllasUstedes: "toman"
      },
      preterite: {
        yo: "tom\xE9",
        tu: "tomaste",
        elEllaUsted: "tom\xF3",
        nosotros: "tomamos",
        ellosEllasUstedes: "tomaron"
      },
      imperfect: {
        yo: "tomaba",
        tu: "tomabas",
        elEllaUsted: "tomaba",
        nosotros: "tom\xE1bamos",
        ellosEllasUstedes: "tomaban"
      },
      conditional: {
        yo: "tomar\xEDa",
        tu: "tomar\xEDas",
        elEllaUsted: "tomar\xEDa",
        nosotros: "tomar\xEDamos",
        ellosEllasUstedes: "tomar\xEDan"
      },
      future: {
        yo: "tomar\xE9",
        tu: "tomar\xE1s",
        elEllaUsted: "tomar\xE1",
        nosotros: "tomaremos",
        ellosEllasUstedes: "tomar\xE1n"
      }
    }
  },
  {
    name: "limpiar",
    englishMeaning: "to clean",
    conjugation: {
      present: {
        yo: "limpio",
        tu: "limpias",
        elEllaUsted: "limpia",
        nosotros: "limpiamos",
        ellosEllasUstedes: "limpian"
      },
      preterite: {
        yo: "limpi\xE9",
        tu: "limpiaste",
        elEllaUsted: "limpi\xF3",
        nosotros: "limpiamos",
        ellosEllasUstedes: "limpiaron"
      },
      imperfect: {
        yo: "limpiaba",
        tu: "limpiabas",
        elEllaUsted: "limpiaba",
        nosotros: "limpi\xE1bamos",
        ellosEllasUstedes: "limpiaban"
      },
      conditional: {
        yo: "limpiar\xEDa",
        tu: "limpiar\xEDas",
        elEllaUsted: "limpiar\xEDa",
        nosotros: "limpiar\xEDamos",
        ellosEllasUstedes: "limpiar\xEDan"
      },
      future: {
        yo: "limpiar\xE9",
        tu: "limpiar\xE1s",
        elEllaUsted: "limpiar\xE1",
        nosotros: "limpiaremos",
        ellosEllasUstedes: "limpiar\xE1n"
      }
    }
  },
  {
    name: "esperar",
    englishMeaning: "to wait, to hope, to expect",
    conjugation: {
      present: {
        yo: "espero",
        tu: "esperas",
        elEllaUsted: "espera",
        nosotros: "esperamos",
        ellosEllasUstedes: "esperan"
      },
      preterite: {
        yo: "esper\xE9",
        tu: "esperaste",
        elEllaUsted: "esper\xF3",
        nosotros: "esperamos",
        ellosEllasUstedes: "esperaron"
      },
      imperfect: {
        yo: "esperaba",
        tu: "esperabas",
        elEllaUsted: "esperaba",
        nosotros: "esper\xE1bamos",
        ellosEllasUstedes: "esperaban"
      },
      conditional: {
        yo: "esperar\xEDa",
        tu: "esperar\xEDas",
        elEllaUsted: "esperar\xEDa",
        nosotros: "esperar\xEDamos",
        ellosEllasUstedes: "esperar\xEDan"
      },
      future: {
        yo: "esperar\xE9",
        tu: "esperar\xE1s",
        elEllaUsted: "esperar\xE1",
        nosotros: "esperaremos",
        ellosEllasUstedes: "esperar\xE1n"
      }
    }
  },
  {
    name: "entrar",
    englishMeaning: "to enter",
    conjugation: {
      present: {
        yo: "entro",
        tu: "entras",
        elEllaUsted: "entra",
        nosotros: "entramos",
        ellosEllasUstedes: "entran"
      },
      preterite: {
        yo: "entr\xE9",
        tu: "entraste",
        elEllaUsted: "entr\xF3",
        nosotros: "entramos",
        ellosEllasUstedes: "entraron"
      },
      imperfect: {
        yo: "entraba",
        tu: "entrabas",
        elEllaUsted: "entraba",
        nosotros: "entr\xE1bamos",
        ellosEllasUstedes: "entraban"
      },
      conditional: {
        yo: "entrar\xEDa",
        tu: "entrar\xEDas",
        elEllaUsted: "entrar\xEDa",
        nosotros: "entrar\xEDamos",
        ellosEllasUstedes: "entrar\xEDan"
      },
      future: {
        yo: "entrar\xE9",
        tu: "entrar\xE1s",
        elEllaUsted: "entrar\xE1",
        nosotros: "entraremos",
        ellosEllasUstedes: "entrar\xE1n"
      }
    }
  },
  {
    name: "dejar",
    englishMeaning: "to leave",
    conjugation: {
      present: {
        yo: "dejo",
        tu: "dejas",
        elEllaUsted: "deja",
        nosotros: "dejamos",
        ellosEllasUstedes: "dejan"
      },
      preterite: {
        yo: "dej\xE9",
        tu: "dejaste",
        elEllaUsted: "dej\xF3",
        nosotros: "dejamos",
        ellosEllasUstedes: "dejaron"
      },
      imperfect: {
        yo: "dejaba",
        tu: "dejabas",
        elEllaUsted: "dejaba",
        nosotros: "dej\xE1bamos",
        ellosEllasUstedes: "dejaban"
      },
      conditional: {
        yo: "dejar\xEDa",
        tu: "dejar\xEDas",
        elEllaUsted: "dejar\xEDa",
        nosotros: "dejar\xEDamos",
        ellosEllasUstedes: "dejar\xEDan"
      },
      future: {
        yo: "dejar\xE9",
        tu: "dejar\xE1s",
        elEllaUsted: "dejar\xE1",
        nosotros: "dejaremos",
        ellosEllasUstedes: "dejar\xE1n"
      }
    }
  },
  {
    name: "mirar",
    englishMeaning: "to watch, to look at",
    conjugation: {
      present: {
        yo: "miro",
        tu: "miras",
        elEllaUsted: "mira",
        nosotros: "miramos",
        ellosEllasUstedes: "miran"
      },
      preterite: {
        yo: "mir\xE9",
        tu: "miraste",
        elEllaUsted: "mir\xF3",
        nosotros: "miramos",
        ellosEllasUstedes: "miraron"
      },
      imperfect: {
        yo: "miraba",
        tu: "mirabas",
        elEllaUsted: "miraba",
        nosotros: "mir\xE1bamos",
        ellosEllasUstedes: "miraban"
      },
      conditional: {
        yo: "mirar\xEDa",
        tu: "mirar\xEDas",
        elEllaUsted: "mirar\xEDa",
        nosotros: "mirar\xEDamos",
        ellosEllasUstedes: "mirar\xEDan"
      },
      future: {
        yo: "mirar\xE9",
        tu: "mirar\xE1s",
        elEllaUsted: "mirar\xE1",
        nosotros: "miraremos",
        ellosEllasUstedes: "mirar\xE1n"
      }
    }
  },
  {
    name: "pagar",
    englishMeaning: "to pay",
    conjugation: {
      present: {
        yo: "pago",
        tu: "pagas",
        elEllaUsted: "paga",
        nosotros: "pagamos",
        ellosEllasUstedes: "pagan"
      },
      preterite: {
        yo: "pagu\xE9",
        tu: "pagaste",
        elEllaUsted: "pag\xF3",
        nosotros: "pagamos",
        ellosEllasUstedes: "pagaron"
      },
      imperfect: {
        yo: "pagaba",
        tu: "pagabas",
        elEllaUsted: "pagaba",
        nosotros: "pag\xE1bamos",
        ellosEllasUstedes: "pagaban"
      },
      conditional: {
        yo: "pagar\xEDa",
        tu: "pagar\xEDas",
        elEllaUsted: "pagar\xEDa",
        nosotros: "pagar\xEDamos",
        ellosEllasUstedes: "pagar\xEDan"
      },
      future: {
        yo: "pagar\xE9",
        tu: "pagar\xE1s",
        elEllaUsted: "pagar\xE1",
        nosotros: "pagaremos",
        ellosEllasUstedes: "pagar\xE1n"
      }
    }
  },
  {
    name: "preparar",
    englishMeaning: "to prepare",
    conjugation: {
      present: {
        yo: "preparo",
        tu: "preparas",
        elEllaUsted: "prepara",
        nosotros: "preparamos",
        ellosEllasUstedes: "preparan"
      },
      preterite: {
        yo: "prepar\xE9",
        tu: "preparaste",
        elEllaUsted: "prepar\xF3",
        nosotros: "preparamos",
        ellosEllasUstedes: "prepararon"
      },
      imperfect: {
        yo: "preparaba",
        tu: "preparabas",
        elEllaUsted: "preparaba",
        nosotros: "prepar\xE1bamos",
        ellosEllasUstedes: "preparaban"
      },
      conditional: {
        yo: "preparar\xEDa",
        tu: "preparar\xEDas",
        elEllaUsted: "preparar\xEDa",
        nosotros: "preparar\xEDamos",
        ellosEllasUstedes: "preparar\xEDan"
      },
      future: {
        yo: "preparar\xE9",
        tu: "preparar\xE1s",
        elEllaUsted: "preparar\xE1",
        nosotros: "prepararemos",
        ellosEllasUstedes: "preparar\xE1n"
      }
    }
  },
  {
    name: "quedar",
    englishMeaning: "to stay",
    conjugation: {
      present: {
        yo: "quedo",
        tu: "quedas",
        elEllaUsted: "queda",
        nosotros: "quedamos",
        ellosEllasUstedes: "quedan"
      },
      preterite: {
        yo: "qued\xE9",
        tu: "quedaste",
        elEllaUsted: "qued\xF3",
        nosotros: "quedamos",
        ellosEllasUstedes: "quedaron"
      },
      imperfect: {
        yo: "quedaba",
        tu: "quedabas",
        elEllaUsted: "quedaba",
        nosotros: "qued\xE1bamos",
        ellosEllasUstedes: "quedaban"
      },
      conditional: {
        yo: "quedar\xEDa",
        tu: "quedar\xEDas",
        elEllaUsted: "quedar\xEDa",
        nosotros: "quedar\xEDamos",
        ellosEllasUstedes: "quedar\xEDan"
      },
      future: {
        yo: "quedar\xE9",
        tu: "quedar\xE1s",
        elEllaUsted: "quedar\xE1",
        nosotros: "quedaremos",
        ellosEllasUstedes: "quedar\xE1n"
      }
    }
  },
  {
    name: "tirar",
    englishMeaning: "to throw",
    conjugation: {
      present: {
        yo: "tiro",
        tu: "tiras",
        elEllaUsted: "tira",
        nosotros: "tiramos",
        ellosEllasUstedes: "tiran"
      },
      preterite: {
        yo: "tir\xE9",
        tu: "tiraste",
        elEllaUsted: "tir\xF3",
        nosotros: "tiramos",
        ellosEllasUstedes: "tiraron"
      },
      imperfect: {
        yo: "tiraba",
        tu: "tirabas",
        elEllaUsted: "tiraba",
        nosotros: "tir\xE1bamos",
        ellosEllasUstedes: "tiraban"
      },
      conditional: {
        yo: "tirar\xEDa",
        tu: "tirar\xEDas",
        elEllaUsted: "tirar\xEDa",
        nosotros: "tirar\xEDamos",
        ellosEllasUstedes: "tirar\xEDan"
      },
      future: {
        yo: "tirar\xE9",
        tu: "tirar\xE1s",
        elEllaUsted: "tirar\xE1",
        nosotros: "tiraremos",
        ellosEllasUstedes: "tirar\xE1n"
      }
    }
  },
  {
    name: "ganar",
    englishMeaning: "to win, earn",
    conjugation: {
      present: {
        yo: "gano",
        tu: "ganas",
        elEllaUsted: "gana",
        nosotros: "ganamos",
        ellosEllasUstedes: "ganan"
      },
      preterite: {
        yo: "gan\xE9",
        tu: "ganaste",
        elEllaUsted: "gan\xF3",
        nosotros: "ganamos",
        ellosEllasUstedes: "ganaron"
      },
      imperfect: {
        yo: "ganaba",
        tu: "ganabas",
        elEllaUsted: "ganaba",
        nosotros: "gan\xE1bamos",
        ellosEllasUstedes: "ganaban"
      },
      conditional: {
        yo: "ganar\xEDa",
        tu: "ganar\xEDas",
        elEllaUsted: "ganar\xEDa",
        nosotros: "ganar\xEDamos",
        ellosEllasUstedes: "ganar\xEDan"
      },
      future: {
        yo: "ganar\xE9",
        tu: "ganar\xE1s",
        elEllaUsted: "ganar\xE1",
        nosotros: "ganaremos",
        ellosEllasUstedes: "ganar\xE1n"
      }
    }
  },
  {
    name: "ayudar",
    englishMeaning: "to help",
    conjugation: {
      present: {
        yo: "ayudo",
        tu: "ayudas",
        elEllaUsted: "ayuda",
        nosotros: "ayudamos",
        ellosEllasUstedes: "ayudan"
      },
      preterite: {
        yo: "ayud\xE9",
        tu: "ayudaste",
        elEllaUsted: "ayud\xF3",
        nosotros: "ayudamos",
        ellosEllasUstedes: "ayudaron"
      },
      imperfect: {
        yo: "ayudaba",
        tu: "ayudabas",
        elEllaUsted: "ayudaba",
        nosotros: "ayud\xE1bamos",
        ellosEllasUstedes: "ayudaban"
      },
      conditional: {
        yo: "ayudar\xEDa",
        tu: "ayudar\xEDas",
        elEllaUsted: "ayudar\xEDa",
        nosotros: "ayudar\xEDamos",
        ellosEllasUstedes: "ayudar\xEDan"
      },
      future: {
        yo: "ayudar\xE9",
        tu: "ayudar\xE1s",
        elEllaUsted: "ayudar\xE1",
        nosotros: "ayudaremos",
        ellosEllasUstedes: "ayudar\xE1n"
      }
    }
  },
  {
    name: "cambiar",
    englishMeaning: "to change",
    conjugation: {
      present: {
        yo: "cambio",
        tu: "cambias",
        elEllaUsted: "cambia",
        nosotros: "cambiamos",
        ellosEllasUstedes: "cambian"
      },
      preterite: {
        yo: "cambi\xE9",
        tu: "cambiaste",
        elEllaUsted: "cambi\xF3",
        nosotros: "cambiamos",
        ellosEllasUstedes: "cambiaron"
      },
      imperfect: {
        yo: "cambiaba",
        tu: "cambiabas",
        elEllaUsted: "cambiaba",
        nosotros: "cambi\xE1bamos",
        ellosEllasUstedes: "cambiaban"
      },
      conditional: {
        yo: "cambiar\xEDa",
        tu: "cambiar\xEDas",
        elEllaUsted: "cambiar\xEDa",
        nosotros: "cambiar\xEDamos",
        ellosEllasUstedes: "cambiar\xEDan"
      },
      future: {
        yo: "cambiar\xE9",
        tu: "cambiar\xE1s",
        elEllaUsted: "cambiar\xE1",
        nosotros: "cambiaremos",
        ellosEllasUstedes: "cambiar\xE1n"
      }
    }
  },
  {
    name: "amar",
    englishMeaning: "to love",
    conjugation: {
      present: {
        yo: "amo",
        tu: "amas",
        elEllaUsted: "ama",
        nosotros: "amamos",
        ellosEllasUstedes: "aman"
      },
      preterite: {
        yo: "am\xE9",
        tu: "amaste",
        elEllaUsted: "am\xF3",
        nosotros: "amamos",
        ellosEllasUstedes: "amaron"
      },
      imperfect: {
        yo: "amaba",
        tu: "amabas",
        elEllaUsted: "amaba",
        nosotros: "am\xE1bamos",
        ellosEllasUstedes: "amaban"
      },
      conditional: {
        yo: "amar\xEDa",
        tu: "amar\xEDas",
        elEllaUsted: "amar\xEDa",
        nosotros: "amar\xEDamos",
        ellosEllasUstedes: "amar\xEDan"
      },
      future: {
        yo: "amar\xE9",
        tu: "amar\xE1s",
        elEllaUsted: "amar\xE1",
        nosotros: "amaremos",
        ellosEllasUstedes: "amar\xE1n"
      }
    }
  },
  {
    name: "bailar",
    englishMeaning: "to dance",
    conjugation: {
      present: {
        yo: "bailo",
        tu: "bailas",
        elEllaUsted: "baila",
        nosotros: "bailamos",
        ellosEllasUstedes: "bailan"
      },
      preterite: {
        yo: "bail\xE9",
        tu: "bailaste",
        elEllaUsted: "bail\xF3",
        nosotros: "bailamos",
        ellosEllasUstedes: "bailaron"
      },
      imperfect: {
        yo: "bailaba",
        tu: "bailabas",
        elEllaUsted: "bailaba",
        nosotros: "bail\xE1bamos",
        ellosEllasUstedes: "bailaban"
      },
      conditional: {
        yo: "bailar\xEDa",
        tu: "bailar\xEDas",
        elEllaUsted: "bailar\xEDa",
        nosotros: "bailar\xEDamos",
        ellosEllasUstedes: "bailar\xEDan"
      },
      future: {
        yo: "bailar\xE9",
        tu: "bailar\xE1s",
        elEllaUsted: "bailar\xE1",
        nosotros: "bailaremos",
        ellosEllasUstedes: "bailar\xE1n"
      }
    }
  },
  {
    name: "aprender",
    englishMeaning: "to learn",
    conjugation: {
      present: {
        yo: "aprendo",
        tu: "aprendas",
        elEllaUsted: "aprenda",
        nosotros: "aprendamos",
        ellosEllasUstedes: "aprendan"
      },
      preterite: {
        yo: "aprend\xE9",
        tu: "aprendaste",
        elEllaUsted: "aprend\xF3",
        nosotros: "aprendamos",
        ellosEllasUstedes: "aprendaron"
      },
      imperfect: {
        yo: "aprendaba",
        tu: "aprendabas",
        elEllaUsted: "aprendaba",
        nosotros: "aprend\xE1bamos",
        ellosEllasUstedes: "aprendaban"
      },
      conditional: {
        yo: "aprendar\xEDa",
        tu: "aprendar\xEDas",
        elEllaUsted: "aprendar\xEDa",
        nosotros: "aprendar\xEDamos",
        ellosEllasUstedes: "aprendar\xEDan"
      },
      future: {
        yo: "aprendar\xE9",
        tu: "aprendar\xE1s",
        elEllaUsted: "aprendar\xE1",
        nosotros: "aprendaremos",
        ellosEllasUstedes: "aprendar\xE1n"
      }
    }
  },
  {
    name: "barrer",
    englishMeaning: "sweep",
    conjugation: {
      present: {
        yo: "barro",
        tu: "barres",
        elEllaUsted: "barre",
        nosotros: "barremos",
        ellosEllasUstedes: "barren"
      },
      preterite: {
        yo: "barr\xED",
        tu: "barriste",
        elEllaUsted: "barri\xF3",
        nosotros: "barrimos",
        ellosEllasUstedes: "barrieron"
      },
      imperfect: {
        yo: "barr\xEDa",
        tu: "barr\xEDas",
        elEllaUsted: "barr\xEDa",
        nosotros: "barr\xEDamos",
        ellosEllasUstedes: "barr\xEDan"
      },
      conditional: {
        yo: "barrer\xEDa",
        tu: "barrer\xEDas",
        elEllaUsted: "barrer\xEDa",
        nosotros: "barrer\xEDamos",
        ellosEllasUstedes: "barrer\xEDan"
      },
      future: {
        yo: "barrer\xE9",
        tu: "barrer\xE1s",
        elEllaUsted: "barrer\xE1",
        nosotros: "barreremos",
        ellosEllasUstedes: "barrer\xE1n"
      }
    }
  },
  {
    name: "beber",
    englishMeaning: "to drink",
    conjugation: {
      present: {
        yo: "bebo",
        tu: "bebes",
        elEllaUsted: "bebe",
        nosotros: "bebemos",
        ellosEllasUstedes: "beben"
      },
      preterite: {
        yo: "beb\xED",
        tu: "bebiste",
        elEllaUsted: "bebi\xF3",
        nosotros: "bebimos",
        ellosEllasUstedes: "bebieron"
      },
      imperfect: {
        yo: "beb\xEDa",
        tu: "beb\xEDas",
        elEllaUsted: "beb\xEDa",
        nosotros: "beb\xEDamos",
        ellosEllasUstedes: "beb\xEDan"
      },
      conditional: {
        yo: "beber\xEDa",
        tu: "beber\xEDas",
        elEllaUsted: "beber\xEDa",
        nosotros: "beber\xEDamos",
        ellosEllasUstedes: "beber\xEDan"
      },
      future: {
        yo: "beber\xE9",
        tu: "beber\xE1s",
        elEllaUsted: "beber\xE1",
        nosotros: "beberemos",
        ellosEllasUstedes: "beber\xE1n"
      }
    }
  },
  {
    name: "comprender",
    englishMeaning: "to understand",
    conjugation: {
      present: {
        yo: "comprendo",
        tu: "comprendes",
        elEllaUsted: "comprende",
        nosotros: "comprendemos",
        ellosEllasUstedes: "comprenden"
      },
      preterite: {
        yo: "comprend\xED",
        tu: "comprendiste",
        elEllaUsted: "comprendi\xF3",
        nosotros: "comprendimos",
        ellosEllasUstedes: "comprendieron"
      },
      imperfect: {
        yo: "comprend\xEDa",
        tu: "comprend\xEDas",
        elEllaUsted: "comprend\xEDa",
        nosotros: "comprend\xEDamos",
        ellosEllasUstedes: "comprend\xEDan"
      },
      conditional: {
        yo: "comprender\xEDa",
        tu: "comprender\xEDas",
        elEllaUsted: "comprender\xEDa",
        nosotros: "comprender\xEDamos",
        ellosEllasUstedes: "comprender\xEDan"
      },
      future: {
        yo: "comprender\xE9",
        tu: "comprender\xE1s",
        elEllaUsted: "comprender\xE1",
        nosotros: "comprenderemos",
        ellosEllasUstedes: "comprender\xE1n"
      }
    }
  },
  {
    name: "correr",
    englishMeaning: "to run",
    conjugation: {
      present: {
        yo: "corro",
        tu: "corres",
        elEllaUsted: "corre",
        nosotros: "corremos",
        ellosEllasUstedes: "corren"
      },
      preterite: {
        yo: "corr\xED",
        tu: "corriste",
        elEllaUsted: "corri\xF3",
        nosotros: "corrimos",
        ellosEllasUstedes: "corrieron"
      },
      imperfect: {
        yo: "corr\xEDa",
        tu: "corr\xEDas",
        elEllaUsted: "corr\xEDa",
        nosotros: "corr\xEDamos",
        ellosEllasUstedes: "corr\xEDan"
      },
      conditional: {
        yo: "correr\xEDa",
        tu: "correr\xEDas",
        elEllaUsted: "correr\xEDa",
        nosotros: "correr\xEDamos",
        ellosEllasUstedes: "correr\xEDan"
      },
      future: {
        yo: "correr\xE9",
        tu: "correr\xE1s",
        elEllaUsted: "correr\xE1",
        nosotros: "correremos",
        ellosEllasUstedes: "correr\xE1n"
      }
    }
  },
  {
    name: "deber",
    englishMeaning: "to have to, should",
    conjugation: {
      present: {
        yo: "debo",
        tu: "debes",
        elEllaUsted: "debe",
        nosotros: "debemos",
        ellosEllasUstedes: "deben"
      },
      preterite: {
        yo: "deb\xED",
        tu: "debiste",
        elEllaUsted: "debi\xF3",
        nosotros: "debimos",
        ellosEllasUstedes: "debieron"
      },
      imperfect: {
        yo: "deb\xEDa",
        tu: "deb\xEDas",
        elEllaUsted: "deb\xEDa",
        nosotros: "deb\xEDamos",
        ellosEllasUstedes: "deb\xEDan"
      },
      conditional: {
        yo: "deber\xEDa",
        tu: "deber\xEDas",
        elEllaUsted: "deber\xEDa",
        nosotros: "deber\xEDamos",
        ellosEllasUstedes: "deber\xEDan"
      },
      future: {
        yo: "deber\xE9",
        tu: "deber\xE1s",
        elEllaUsted: "deber\xE1",
        nosotros: "deberemos",
        ellosEllasUstedes: "deber\xE1n"
      }
    }
  },
  {
    name: "leer",
    englishMeaning: "to read",
    conjugation: {
      present: {
        yo: "leo",
        tu: "lees",
        elEllaUsted: "lee",
        nosotros: "leemos",
        ellosEllasUstedes: "leen"
      },
      preterite: {
        yo: "le\xED",
        tu: "le\xEDste",
        elEllaUsted: "ley\xF3",
        nosotros: "le\xEDmos",
        ellosEllasUstedes: "leyeron",
        irregular: true
      },
      imperfect: {
        yo: "le\xEDa",
        tu: "le\xEDas",
        elEllaUsted: "le\xEDa",
        nosotros: "le\xEDamos",
        ellosEllasUstedes: "le\xEDan"
      },
      conditional: {
        yo: "leer\xEDa",
        tu: "leer\xEDas",
        elEllaUsted: "leer\xEDa",
        nosotros: "leer\xEDamos",
        ellosEllasUstedes: "leer\xEDan"
      },
      future: {
        yo: "leer\xE9",
        tu: "leer\xE1s",
        elEllaUsted: "leer\xE1",
        nosotros: "leeremos",
        ellosEllasUstedes: "leer\xE1n"
      }
    }
  },
  {
    name: "meter",
    englishMeaning: "to put on, insert",
    conjugation: {
      present: {
        yo: "meto",
        tu: "metes",
        elEllaUsted: "mete",
        nosotros: "metemos",
        ellosEllasUstedes: "meten"
      },
      preterite: {
        yo: "met\xED",
        tu: "metiste",
        elEllaUsted: "meti\xF3",
        nosotros: "metimos",
        ellosEllasUstedes: "metieron"
      },
      imperfect: {
        yo: "met\xEDa",
        tu: "met\xEDas",
        elEllaUsted: "met\xEDa",
        nosotros: "met\xEDamos",
        ellosEllasUstedes: "met\xEDan"
      },
      conditional: {
        yo: "meter\xEDa",
        tu: "meter\xEDas",
        elEllaUsted: "meter\xEDa",
        nosotros: "meter\xEDamos",
        ellosEllasUstedes: "meter\xEDan"
      },
      future: {
        yo: "meter\xE9",
        tu: "meter\xE1s",
        elEllaUsted: "meter\xE1",
        nosotros: "meteremos",
        ellosEllasUstedes: "meter\xE1n"
      }
    }
  },
  {
    name: "prender",
    englishMeaning: "turn on",
    conjugation: {
      present: {
        yo: "prendo",
        tu: "prendes",
        elEllaUsted: "prende",
        nosotros: "prendemos",
        ellosEllasUstedes: "prenden"
      },
      preterite: {
        yo: "prend\xED",
        tu: "prendiste",
        elEllaUsted: "prendi\xF3",
        nosotros: "prendimos",
        ellosEllasUstedes: "prendieron"
      },
      imperfect: {
        yo: "prend\xEDa",
        tu: "prend\xEDas",
        elEllaUsted: "prend\xEDa",
        nosotros: "prend\xEDamos",
        ellosEllasUstedes: "prend\xEDan"
      },
      conditional: {
        yo: "prender\xEDa",
        tu: "prender\xEDas",
        elEllaUsted: "prender\xEDa",
        nosotros: "prender\xEDamos",
        ellosEllasUstedes: "prender\xEDan"
      },
      future: {
        yo: "prender\xE9",
        tu: "prender\xE1s",
        elEllaUsted: "prender\xE1",
        nosotros: "prenderemos",
        ellosEllasUstedes: "prender\xE1n"
      }
    }
  },
  {
    name: "romper",
    englishMeaning: "to break",
    conjugation: {
      present: {
        yo: "rompo",
        tu: "rompes",
        elEllaUsted: "rompe",
        nosotros: "rompemos",
        ellosEllasUstedes: "rompen"
      },
      preterite: {
        yo: "romp\xED",
        tu: "rompiste",
        elEllaUsted: "rompi\xF3",
        nosotros: "rompimos",
        ellosEllasUstedes: "rompieron"
      },
      imperfect: {
        yo: "romp\xEDa",
        tu: "romp\xEDas",
        elEllaUsted: "romp\xEDa",
        nosotros: "romp\xEDamos",
        ellosEllasUstedes: "romp\xEDan"
      },
      conditional: {
        yo: "romper\xEDa",
        tu: "romper\xEDas",
        elEllaUsted: "romper\xEDa",
        nosotros: "romper\xEDamos",
        ellosEllasUstedes: "romper\xEDan"
      },
      future: {
        yo: "romper\xE9",
        tu: "romper\xE1s",
        elEllaUsted: "romper\xE1",
        nosotros: "romperemos",
        ellosEllasUstedes: "romper\xE1n"
      }
    }
  },
  {
    name: "temer",
    englishMeaning: "to fear, dread",
    conjugation: {
      present: {
        yo: "temo",
        tu: "temes",
        elEllaUsted: "teme",
        nosotros: "tememos",
        ellosEllasUstedes: "temen"
      },
      preterite: {
        yo: "tem\xED",
        tu: "temiste",
        elEllaUsted: "temi\xF3",
        nosotros: "temimos",
        ellosEllasUstedes: "temieron"
      },
      imperfect: {
        yo: "tem\xEDa",
        tu: "tem\xEDas",
        elEllaUsted: "tem\xEDa",
        nosotros: "tem\xEDamos",
        ellosEllasUstedes: "tem\xEDan"
      },
      conditional: {
        yo: "temer\xEDa",
        tu: "temer\xEDas",
        elEllaUsted: "temer\xEDa",
        nosotros: "temer\xEDamos",
        ellosEllasUstedes: "temer\xEDan"
      },
      future: {
        yo: "temer\xE9",
        tu: "temer\xE1s",
        elEllaUsted: "temer\xE1",
        nosotros: "temeremos",
        ellosEllasUstedes: "temer\xE1n"
      }
    }
  },
  {
    name: "toser",
    englishMeaning: "to cough",
    conjugation: {
      present: {
        yo: "toso",
        tu: "toses",
        elEllaUsted: "tose",
        nosotros: "tosemos",
        ellosEllasUstedes: "tosen"
      },
      preterite: {
        yo: "tos\xED",
        tu: "tosiste",
        elEllaUsted: "tosi\xF3",
        nosotros: "tosimos",
        ellosEllasUstedes: "tosieron"
      },
      imperfect: {
        yo: "tos\xEDa",
        tu: "tos\xEDas",
        elEllaUsted: "tos\xEDa",
        nosotros: "tos\xEDamos",
        ellosEllasUstedes: "tos\xEDan"
      },
      conditional: {
        yo: "toser\xEDa",
        tu: "toser\xEDas",
        elEllaUsted: "toser\xEDa",
        nosotros: "toser\xEDamos",
        ellosEllasUstedes: "toser\xEDan"
      },
      future: {
        yo: "toser\xE9",
        tu: "toser\xE1s",
        elEllaUsted: "toser\xE1",
        nosotros: "toseremos",
        ellosEllasUstedes: "toser\xE1n"
      }
    }
  },
  {
    name: "vender",
    englishMeaning: "to sell",
    conjugation: {
      present: {
        yo: "vendo",
        tu: "vendes",
        elEllaUsted: "vende",
        nosotros: "vendemos",
        ellosEllasUstedes: "venden"
      },
      preterite: {
        yo: "vend\xED",
        tu: "vendiste",
        elEllaUsted: "vendi\xF3",
        nosotros: "vendimos",
        ellosEllasUstedes: "vendieron"
      },
      imperfect: {
        yo: "vend\xEDa",
        tu: "vend\xEDas",
        elEllaUsted: "vend\xEDa",
        nosotros: "vend\xEDamos",
        ellosEllasUstedes: "vend\xEDan"
      },
      conditional: {
        yo: "vender\xEDa",
        tu: "vender\xEDas",
        elEllaUsted: "vender\xEDa",
        nosotros: "vender\xEDamos",
        ellosEllasUstedes: "vender\xEDan"
      },
      future: {
        yo: "vender\xE9",
        tu: "vender\xE1s",
        elEllaUsted: "vender\xE1",
        nosotros: "venderemos",
        ellosEllasUstedes: "vender\xE1n"
      }
    }
  },
  {
    name: "abrir",
    englishMeaning: "to open",
    conjugation: {
      present: {
        yo: "abro",
        tu: "abres",
        elEllaUsted: "abre",
        nosotros: "abrimos",
        ellosEllasUstedes: "abren"
      },
      preterite: {
        yo: "abr\xED",
        tu: "abriste",
        elEllaUsted: "abri\xF3",
        nosotros: "abrimos",
        ellosEllasUstedes: "abrieron"
      },
      imperfect: {
        yo: "abr\xEDa",
        tu: "abr\xEDas",
        elEllaUsted: "abr\xEDa",
        nosotros: "abr\xEDamos",
        ellosEllasUstedes: "abr\xEDan"
      },
      conditional: {
        yo: "abrir\xEDa",
        tu: "abrir\xEDas",
        elEllaUsted: "abrir\xEDa",
        nosotros: "abrir\xEDamos",
        ellosEllasUstedes: "abrir\xEDan"
      },
      future: {
        yo: "abrir\xE9",
        tu: "abrir\xE1s",
        elEllaUsted: "abrir\xE1",
        nosotros: "abriremos",
        ellosEllasUstedes: "abrir\xE1n"
      }
    }
  },
  {
    name: "a\xF1adir",
    englishMeaning: "to add",
    conjugation: {
      present: {
        yo: "a\xF1ado",
        tu: "a\xF1ades",
        elEllaUsted: "a\xF1ade",
        nosotros: "a\xF1adimos",
        ellosEllasUstedes: "a\xF1aden"
      },
      preterite: {
        yo: "a\xF1ad\xED",
        tu: "a\xF1adiste",
        elEllaUsted: "a\xF1adi\xF3",
        nosotros: "a\xF1adimos",
        ellosEllasUstedes: "a\xF1adieron"
      },
      imperfect: {
        yo: "a\xF1ad\xEDa",
        tu: "a\xF1ad\xEDas",
        elEllaUsted: "a\xF1ad\xEDa",
        nosotros: "a\xF1ad\xEDamos",
        ellosEllasUstedes: "a\xF1ad\xEDan"
      },
      conditional: {
        yo: "a\xF1adir\xEDa",
        tu: "a\xF1adir\xEDas",
        elEllaUsted: "a\xF1adir\xEDa",
        nosotros: "a\xF1adir\xEDamos",
        ellosEllasUstedes: "a\xF1adir\xEDan"
      },
      future: {
        yo: "a\xF1adir\xE9",
        tu: "a\xF1adir\xE1s",
        elEllaUsted: "a\xF1adir\xE1",
        nosotros: "a\xF1adiremos",
        ellosEllasUstedes: "a\xF1adir\xE1n"
      }
    }
  },
  {
    name: "asistir",
    englishMeaning: "to attend",
    conjugation: {
      present: {
        yo: "asisto",
        tu: "asistes",
        elEllaUsted: "asiste",
        nosotros: "asistimos",
        ellosEllasUstedes: "asisten"
      },
      preterite: {
        yo: "asist\xED",
        tu: "asististe",
        elEllaUsted: "asisti\xF3",
        nosotros: "asistimos",
        ellosEllasUstedes: "asistieron"
      },
      imperfect: {
        yo: "asist\xEDa",
        tu: "asist\xEDas",
        elEllaUsted: "asist\xEDa",
        nosotros: "asist\xEDamos",
        ellosEllasUstedes: "asist\xEDan"
      },
      conditional: {
        yo: "asistir\xEDa",
        tu: "asistir\xEDas",
        elEllaUsted: "asistir\xEDa",
        nosotros: "asistir\xEDamos",
        ellosEllasUstedes: "asistir\xEDan"
      },
      future: {
        yo: "asistir\xE9",
        tu: "asistir\xE1s",
        elEllaUsted: "asistir\xE1",
        nosotros: "asistiremos",
        ellosEllasUstedes: "asistir\xE1n"
      }
    }
  },
  {
    name: "describir",
    englishMeaning: "to describe",
    conjugation: {
      present: {
        yo: "describo",
        tu: "describes",
        elEllaUsted: "describe",
        nosotros: "describimos",
        ellosEllasUstedes: "describen"
      },
      preterite: {
        yo: "describ\xED",
        tu: "describiste",
        elEllaUsted: "describi\xF3",
        nosotros: "describimos",
        ellosEllasUstedes: "describieron"
      },
      imperfect: {
        yo: "describ\xEDa",
        tu: "describ\xEDas",
        elEllaUsted: "describ\xEDa",
        nosotros: "describ\xEDamos",
        ellosEllasUstedes: "describ\xEDan"
      },
      conditional: {
        yo: "describir\xEDa",
        tu: "describir\xEDas",
        elEllaUsted: "describir\xEDa",
        nosotros: "describir\xEDamos",
        ellosEllasUstedes: "describir\xEDan"
      },
      future: {
        yo: "describir\xE9",
        tu: "describir\xE1s",
        elEllaUsted: "describir\xE1",
        nosotros: "describiremos",
        ellosEllasUstedes: "describir\xE1n"
      }
    }
  },
  {
    name: "discutir",
    englishMeaning: "to argue",
    conjugation: {
      present: {
        yo: "discuto",
        tu: "discutes",
        elEllaUsted: "discute",
        nosotros: "discutimos",
        ellosEllasUstedes: "discuten"
      },
      preterite: {
        yo: "discut\xED",
        tu: "discutiste",
        elEllaUsted: "discuti\xF3",
        nosotros: "discutimos",
        ellosEllasUstedes: "discutieron"
      },
      imperfect: {
        yo: "discut\xEDa",
        tu: "discut\xEDas",
        elEllaUsted: "discut\xEDa",
        nosotros: "discut\xEDamos",
        ellosEllasUstedes: "discut\xEDan"
      },
      conditional: {
        yo: "discutir\xEDa",
        tu: "discutir\xEDas",
        elEllaUsted: "discutir\xEDa",
        nosotros: "discutir\xEDamos",
        ellosEllasUstedes: "discutir\xEDan"
      },
      future: {
        yo: "discutir\xE9",
        tu: "discutir\xE1s",
        elEllaUsted: "discutir\xE1",
        nosotros: "discutiremos",
        ellosEllasUstedes: "discutir\xE1n"
      }
    }
  },
  {
    name: "escribir",
    englishMeaning: "to write",
    conjugation: {
      present: {
        yo: "escribo",
        tu: "escribes",
        elEllaUsted: "escribe",
        nosotros: "escribimos",
        ellosEllasUstedes: "escriben"
      },
      preterite: {
        yo: "escrib\xED",
        tu: "escribiste",
        elEllaUsted: "escribi\xF3",
        nosotros: "escribimos",
        ellosEllasUstedes: "escribieron"
      },
      imperfect: {
        yo: "escrib\xEDa",
        tu: "escrib\xEDas",
        elEllaUsted: "escrib\xEDa",
        nosotros: "escrib\xEDamos",
        ellosEllasUstedes: "escrib\xEDan"
      },
      conditional: {
        yo: "escribir\xEDa",
        tu: "escribir\xEDas",
        elEllaUsted: "escribir\xEDa",
        nosotros: "escribir\xEDamos",
        ellosEllasUstedes: "escribir\xEDan"
      },
      future: {
        yo: "escribir\xE9",
        tu: "escribir\xE1s",
        elEllaUsted: "escribir\xE1",
        nosotros: "escribiremos",
        ellosEllasUstedes: "escribir\xE1n"
      }
    }
  },
  {
    name: "ocurrir",
    englishMeaning: "to occur",
    conjugation: {
      present: {
        yo: "ocurro",
        tu: "ocurres",
        elEllaUsted: "ocurre",
        nosotros: "ocurrimos",
        ellosEllasUstedes: "ocurren"
      },
      preterite: {
        yo: "ocurr\xED",
        tu: "ocurriste",
        elEllaUsted: "ocurri\xF3",
        nosotros: "ocurrimos",
        ellosEllasUstedes: "ocurrieron"
      },
      imperfect: {
        yo: "ocurr\xEDa",
        tu: "ocurr\xEDas",
        elEllaUsted: "ocurr\xEDa",
        nosotros: "ocurr\xEDamos",
        ellosEllasUstedes: "ocurr\xEDan"
      },
      conditional: {
        yo: "ocurrir\xEDa",
        tu: "ocurrir\xEDas",
        elEllaUsted: "ocurrir\xEDa",
        nosotros: "ocurrir\xEDamos",
        ellosEllasUstedes: "ocurrir\xEDan"
      },
      future: {
        yo: "ocurrir\xE9",
        tu: "ocurrir\xE1s",
        elEllaUsted: "ocurrir\xE1",
        nosotros: "ocurriremos",
        ellosEllasUstedes: "ocurrir\xE1n"
      }
    }
  },
  {
    name: "recibir",
    englishMeaning: "to receive",
    conjugation: {
      present: {
        yo: "recibo",
        tu: "recibes",
        elEllaUsted: "recibe",
        nosotros: "recibimos",
        ellosEllasUstedes: "reciben"
      },
      preterite: {
        yo: "recib\xED",
        tu: "recibiste",
        elEllaUsted: "recibi\xF3",
        nosotros: "recibimos",
        ellosEllasUstedes: "recibieron"
      },
      imperfect: {
        yo: "recib\xEDa",
        tu: "recib\xEDas",
        elEllaUsted: "recib\xEDa",
        nosotros: "recib\xEDamos",
        ellosEllasUstedes: "recib\xEDan"
      },
      conditional: {
        yo: "recibir\xEDa",
        tu: "recibir\xEDas",
        elEllaUsted: "recibir\xEDa",
        nosotros: "recibir\xEDamos",
        ellosEllasUstedes: "recibir\xEDan"
      },
      future: {
        yo: "recibir\xE9",
        tu: "recibir\xE1s",
        elEllaUsted: "recibir\xE1",
        nosotros: "recibiremos",
        ellosEllasUstedes: "recibir\xE1n"
      }
    }
  },
  {
    name: "subir",
    englishMeaning: "to go up, climb",
    conjugation: {
      present: {
        yo: "subo",
        tu: "subes",
        elEllaUsted: "sube",
        nosotros: "subimos",
        ellosEllasUstedes: "suben"
      },
      preterite: {
        yo: "sub\xED",
        tu: "subiste",
        elEllaUsted: "subi\xF3",
        nosotros: "subimos",
        ellosEllasUstedes: "subieron"
      },
      imperfect: {
        yo: "sub\xEDa",
        tu: "sub\xEDas",
        elEllaUsted: "sub\xEDa",
        nosotros: "sub\xEDamos",
        ellosEllasUstedes: "sub\xEDan"
      },
      conditional: {
        yo: "subir\xEDa",
        tu: "subir\xEDas",
        elEllaUsted: "subir\xEDa",
        nosotros: "subir\xEDamos",
        ellosEllasUstedes: "subir\xEDan"
      },
      future: {
        yo: "subir\xE9",
        tu: "subir\xE1s",
        elEllaUsted: "subir\xE1",
        nosotros: "subiremos",
        ellosEllasUstedes: "subir\xE1n"
      }
    }
  },
  {
    name: "sufrir",
    englishMeaning: "to suffer",
    conjugation: {
      present: {
        yo: "sufro",
        tu: "sufres",
        elEllaUsted: "sufre",
        nosotros: "sufrimos",
        ellosEllasUstedes: "sufren"
      },
      preterite: {
        yo: "sufr\xED",
        tu: "sufriste",
        elEllaUsted: "sufri\xF3",
        nosotros: "sufrimos",
        ellosEllasUstedes: "sufrieron"
      },
      imperfect: {
        yo: "sufr\xEDa",
        tu: "sufr\xEDas",
        elEllaUsted: "sufr\xEDa",
        nosotros: "sufr\xEDamos",
        ellosEllasUstedes: "sufr\xEDan"
      },
      conditional: {
        yo: "sufrir\xEDa",
        tu: "sufrir\xEDas",
        elEllaUsted: "sufrir\xEDa",
        nosotros: "sufrir\xEDamos",
        ellosEllasUstedes: "sufrir\xEDan"
      },
      future: {
        yo: "sufrir\xE9",
        tu: "sufrir\xE1s",
        elEllaUsted: "sufrir\xE1",
        nosotros: "sufriremos",
        ellosEllasUstedes: "sufrir\xE1n"
      }
    }
  },
  {
    name: "ser",
    englishMeaning: "to be (have a quality/possession/price/origin)",
    conjugation: {
      present: {
        yo: "soy",
        tu: "eres",
        elEllaUsted: "es",
        nosotros: "somos",
        ellosEllasUstedes: "son",
        irregular: true
      },
      preterite: {
        yo: "fui",
        tu: "fuiste",
        elEllaUsted: "fue",
        nosotros: "fuimos",
        ellosEllasUstedes: "fueron",
        irregular: true
      },
      imperfect: {
        yo: "era",
        tu: "eras",
        elEllaUsted: "era",
        nosotros: "\xE9ramos" ,
        ellosEllasUstedes: "eran",
        irregular: true
      },
      conditional: {
        yo: "ser\xEDa",
        tu: "ser\xEDas",
        elEllaUsted: "ser\xEDa",
        nosotros: "ser\xEDamos",
        ellosEllasUstedes: "ser\xEDan"
      },
      future: {
        yo: "ser\xE9",
        tu: "ser\xE1s",
        elEllaUsted: "ser\xE1",
        nosotros: "seremos",
        ellosEllasUstedes: "ser\xE1n"
      }
    }
  },
  {
    name: "estar",
    englishMeaning: "to be (feelings/location)",
    conjugation: {
      present: {
        yo: "estoy",
        tu: "est\xE1s",
        elEllaUsted: "est\xE1",
        nosotros: "estamos",
        ellosEllasUstedes: "est\xE1n",
        irregular: true
      },
      preterite: {
        yo: "estuve",
        tu: "estuviste",
        elEllaUsted: "estuvo",
        nosotros: "estuvimos",
        ellosEllasUstedes: "estuvieron",
        irregular: true
      },
      imperfect: {
        yo: "estaba",
        tu: "estabas",
        elEllaUsted: "estaba",
        nosotros: "est\xE1bamos" ,
        ellosEllasUstedes: "estaban"
      },
      conditional: {
        yo: "estar\xEDa",
        tu: "estar\xEDas",
        elEllaUsted: "estar\xEDa",
        nosotros: "estar\xEDamos",
        ellosEllasUstedes: "estar\xEDan"
      },
      future: {
        yo: "estar\xE9",
        tu: "estar\xE1s",
        elEllaUsted: "estar\xE1",
        nosotros: "estaremos",
        ellosEllasUstedes: "estar\xE1n"
      }
    }
  },
  {
    name: "tener",
    englishMeaning: "to have/to have to do something",
    conjugation: {
      present: {
        yo: "tengo",
        tu: "tienes",
        elEllaUsted: "tiene",
        nosotros: "tenemos",
        ellosEllasUstedes: "tienen",
        irregular: true
      },
      preterite: {
        yo: "tuve",
        tu: "tuviste",
        elEllaUsted: "tuvo",
        nosotros: "tuvimos",
        ellosEllasUstedes: "tuvieron",
        irregular: true
      },
      imperfect: {
        yo: "ten\xEDa" ,
        tu: "ten\xEDas",
        elEllaUsted: "ten\xEDa",
        nosotros: "ten\xEDamos",
        ellosEllasUstedes: "ten\xEDan"
      },
      conditional: {
        yo: "tendr\xEDa",
        tu: "tendr\xEDas",
        elEllaUsted: "tendr\xEDa",
        nosotros: "tendr\xEDamos",
        ellosEllasUstedes: "tendr\xEDan",
        irregular: true
      },
      future: {
        yo: "tendr\xE9",
        tu: "tendr\xE1s",
        elEllaUsted: "tendr\xE1",
        nosotros: "tendremos",
        ellosEllasUstedes: "tendr\xE1n",
        irregular: true
      }
    }
  },
  {
    //TODO: Marly help me, english description + conjugation unused that I forgot about 
    name: "haber",
    englishMeaning: "to have, there is/are (auxiliary verb)",
    conjugation: {
      present: {
        yo: "he",
        tu: "has",
        elEllaUsted: "ha",
        nosotros: "hemos",
        ellosEllasUstedes: "han",
        irregular: true
      },
      preterite: {
        yo: "hube",
        tu: "hubiste",
        elEllaUsted: "hubo",
        nosotros: "hubimos",
        ellosEllasUstedes: "hubieron",
        irregular: true
      },
      imperfect: { //TODO fix this
        yo: "hab\xEDa" ,
        tu: "hab\xEDas",
        elEllaUsted: "hab\xEDa",
        nosotros: "hab\xEDamos",
        ellosEllasUstedes: "hab\xEDan"
      },
      conditional: {
        yo: "habr\xEDa",
        tu: "habr\xEDas",
        elEllaUsted: "habr\xEDa",
        nosotros: "habr\xEDamos",
        ellosEllasUstedes: "habr\xEDan",
        irregular: true
      },
      future: {
        yo: "habr\xE9",
        tu: "habr\xE1s",
        elEllaUsted: "habr\xE1",
        nosotros: "habremos",
        ellosEllasUstedes: "habr\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "poder",
    englishMeaning: "to be able to (can, permission)",
    conjugation: {
      present: {
        yo: "puedo",
        tu: "puedes",
        elEllaUsted: "puede",
        nosotros: "podemos",
        ellosEllasUstedes: "pueden",
        irregular: true
      },
      preterite: {
        yo: "pude",
        tu: "pudiste",
        elEllaUsted: "pudo",
        nosotros: "pudimos",
        ellosEllasUstedes: "pudieron",
        irregular: true
      },
      imperfect: {
        yo: "pod\xEDa",
        tu: "pod\xEDas",
        elEllaUsted: "pod\xEDa",
        nosotros: "pod\xEDamos",
        ellosEllasUstedes: "pod\xEDan"
      },
      conditional: {
        yo: "podr\xEDa",
        tu: "podr\xEDas",
        elEllaUsted: "podr\xEDa",
        nosotros: "podr\xEDamos",
        ellosEllasUstedes: "podr\xEDan",
        irregular: true
      },
      future: {
        yo: "podr\xE9",
        tu: "podr\xE1s",
        elEllaUsted: "podr\xE1",
        nosotros: "podremos",
        ellosEllasUstedes: "podr\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "hacer",
    englishMeaning: "to do, to make",
    conjugation: {
      present: {
        yo: "hago",
        tu: "haces",
        elEllaUsted: "hace",
        nosotros: "hacemos",
        ellosEllasUstedes: "hacen",
        irregular: true
      },
      preterite: {
        yo: "hice",
        tu: "hiciste",
        elEllaUsted: "hizo",
        nosotros: "hicimos",
        ellosEllasUstedes: "hicieron",
        irregular: true
      },
      imperfect: {
        yo: "hac\xEDa",
        tu: "hac\xEDas",
        elEllaUsted: "hac\xEDa",
        nosotros: "hac\xEDamos",
        ellosEllasUstedes: "hac\xEDan"
      },
      conditional: {
        yo: "har\xEDa",
        tu: "har\xEDas",
        elEllaUsted: "har\xEDa",
        nosotros: "har\xEDamos",
        ellosEllasUstedes: "har\xEDan",
        irregular: true
      },
      future: {
        yo: "har\xE9",
        tu: "har\xE1s",
        elEllaUsted: "har\xE1",
        nosotros: "haremos",
        ellosEllasUstedes: "har\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "ir",
    englishMeaning: "to go",
    conjugation: {
      present: {
        yo: "voy",
        tu: "vas",
        elEllaUsted: "va",
        nosotros: "vamos",
        ellosEllasUstedes: "van",
        irregular: true
      },
      preterite: {
        yo: "fui",
        tu: "fuiste",
        elEllaUsted: "fue",
        nosotros: "fuimos",
        ellosEllasUstedes: "fueron",
        irregular: true
      },
      imperfect: {
        yo: "iba",
        tu: "ibas",
        elEllaUsted: "iba",
        nosotros: "\xEDbamos",
        ellosEllasUstedes: "iban",
        irregular: true
      },
      conditional: {
        yo: "har\xEDa",
        tu: "har\xEDas",
        elEllaUsted: "har\xEDa",
        nosotros: "har\xEDamos",
        ellosEllasUstedes: "har\xEDan",
      },
      future: {
        yo: "ir\xEDa",
        tu: "ir\xEDas",
        elEllaUsted: "ir\xEDa",
        nosotros: "ir\xEDamos",
        ellosEllasUstedes: "ir\xEDan"
      }
    }
  },
  {
    name: "poner",
    englishMeaning: "to put",
    conjugation: {
      present: {
        yo: "pongo",
        tu: "pones",
        elEllaUsted: "pone",
        nosotros: "ponemos",
        ellosEllasUstedes: "ponen",
        irregular: true
      },
      preterite: {
        yo: "puse",
        tu: "pusiste",
        elEllaUsted: "puso",
        nosotros: "pusimos",
        ellosEllasUstedes: "pusieron",
        irregular: true
      },
      imperfect: {
        yo: "pon\xEDa",
        tu: "pon\xEDas",
        elEllaUsted: "pon\xEDa",
        nosotros: "pon\xEDamos",
        ellosEllasUstedes: "pon\xEDan"
      },
      conditional: {
        yo: "pondr\xEDa",
        tu: "pondr\xEDas",
        elEllaUsted: "pondr\xEDa",
        nosotros: "pondr\xEDamos",
        ellosEllasUstedes: "pondr\xEDan",
        irregular: true
      },
      future: {
        yo: "pondr\xE9",
        tu: "pondr\xE1s",
        elEllaUsted: "pondr\xE1",
        nosotros: "pondremos",
        ellosEllasUstedes: "pondr\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "decir",
    englishMeaning: "to say, to tell",
    conjugation: {
      present: {
        yo: "digo",
        tu: "dices",
        elEllaUsted: "dice",
        nosotros: "decimos",
        ellosEllasUstedes: "dicen",
        irregular: true
      },
      preterite: {
        yo: "dije",
        tu: "dijiste",
        elEllaUsted: "dijo",
        nosotros: "dijimos",
        ellosEllasUstedes: "dijeron",
        irregular: true
      },
      imperfect: {
        yo: "dec\xEDa",
        tu: "dec\xEDas",
        elEllaUsted: "dec\xEDa",
        nosotros: "dec\xEDamos",
        ellosEllasUstedes: "dec\xEDan"
      },
      conditional: {
        yo: "dir\xEDa",
        tu: "dir\xEDas",
        elEllaUsted: "dir\xEDa",
        nosotros: "dir\xEDamos",
        ellosEllasUstedes: "dir\xEDan",
        irregular: true
      },
      future: {
        yo: "dir\xE9",
        tu: "dir\xE1s",
        elEllaUsted: "dir\xE1",
        nosotros: "diremos",
        ellosEllasUstedes: "dir\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "ver",
    englishMeaning: "to see, to watch",
    conjugation: {
      present: {
        yo: "veo",
        tu: "ves",
        elEllaUsted: "ve",
        nosotros: "vemos",
        ellosEllasUstedes: "ven",
        irregular: true
      },
      preterite: {
        yo: "vi",
        tu: "viste",
        elEllaUsted: "vio",
        nosotros: "vimos",
        ellosEllasUstedes: "vieron",
        irregular: true
      },
      imperfect: {
        yo: "ve\xEDa",
        tu: "ve\xEDas",
        elEllaUsted: "ve\xEDa",
        nosotros: "ve\xEDamos",
        ellosEllasUstedes: "ve\xEDan",
        irregular: true
      },
      conditional: {
        yo: "ver\xEDa",
        tu: "ver\xEDas",
        elEllaUsted: "ver\xEDa",
        nosotros: "ver\xEDamos",
        ellosEllasUstedes: "ver\xEDan"
      },
      future: {
        yo: "ver\xE9",
        tu: "ver\xE1s",
        elEllaUsted: "ver\xE1",
        nosotros: "veremos",
        ellosEllasUstedes: "ver\xE1n"
      }
    }
  },
  {
    name: "querer",
    englishMeaning: "to want, to love",
    conjugation: {
      present: {
        yo: "quiero",
        tu: "quieres",
        elEllaUsted: "quiere",
        nosotros: "queremos",
        ellosEllasUstedes: "quieren",
        irregular: true
      },
      preterite: {
        yo: "quise",
        tu: "quisiste",
        elEllaUsted: "quiso",
        nosotros: "quisimos",
        ellosEllasUstedes: "quisieron",
        irregular: true
      },
      imperfect: {
        yo: "quer\xEDa",
        tu: "quer\xEDas",
        elEllaUsted: "quer\xEDa",
        nosotros: "quer\xEDamos",
        ellosEllasUstedes: "quer\xEDan"
      },
      conditional: {
        yo: "querr\xEDa",
        tu: "querr\xEDas",
        elEllaUsted: "querr\xEDa",
        nosotros: "querr\xEDamos",
        ellosEllasUstedes: "querr\xEDan",
        irregular: true
      },
      future: {
        yo: "querr\xE9",
        tu: "querr\xE1s",
        elEllaUsted: "querr\xE1",
        nosotros: "querremos",
        ellosEllasUstedes: "querr\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "saber",
    englishMeaning: "to know, to taste",
    conjugation: {
      present: {
        yo: "s\xE9" ,
        tu: "sabes",
        elEllaUsted: "sabe",
        nosotros: "sabemos",
        ellosEllasUstedes: "saben",
        irregular: true
      },
      preterite: {
        yo: "supe",
        tu: "supiste",
        elEllaUsted: "supo",
        nosotros: "supimos",
        ellosEllasUstedes: "supieron",
        irregular: true
      },
      imperfect: {
        yo: "sab\xEDa",
        tu: "sab\xEDas",
        elEllaUsted: "sab\xEDa",
        nosotros: "sab\xEDamos",
        ellosEllasUstedes: "sab\xEDan"
      },
      conditional: {
        yo: "sabr\xEDa",
        tu: "sabr\xEDas",
        elEllaUsted: "sabr\xEDa",
        nosotros: "sabr\xEDamos",
        ellosEllasUstedes: "sabr\xEDan",
        irregular: true
      },
      future: {
        yo: "sabr\xE9",
        tu: "sabr\xE1s",
        elEllaUsted: "sabr\xE1",
        nosotros: "sabremos",
        ellosEllasUstedes: "sabr\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "llegar",
    englishMeaning: "to arrive, to come",
    conjugation: {
      present: {
        yo: "llego",
        tu: "llegas",
        elEllaUsted: "llega",
        nosotros: "llegamos",
        ellosEllasUstedes: "llegan"
      },
      preterite: {
        yo: "llegu\xE9",
        tu: "llegaste",
        elEllaUsted: "lleg\xF3",
        nosotros: "llegamos",
        ellosEllasUstedes: "llegaron",
        irregular: true
      },
      imperfect: {
        yo: "llegaba",
        tu: "llegabas",
        elEllaUsted: "llegaba",
        nosotros: "lleg\xE1bamos",
        ellosEllasUstedes: "llegaban"
      },
      conditional: {
        yo: "llegar\xEDa",
        tu: "llegar\xEDas",
        elEllaUsted: "llegar\xEDa",
        nosotros: "llegar\xEDamos",
        ellosEllasUstedes: "llegar\xEDan"
      },
      future: {
        yo: "llegar\xE9",
        tu: "llegar\xE1s",
        elEllaUsted: "llegar\xE1",
        nosotros: "llegaremos",
        ellosEllasUstedes: "llegar\xE1n"
      }
    }
  },
  {
    name: "creer",
    englishMeaning: "to think, to believe",
    conjugation: {
      present: {
        yo: "cre\xE9" ,
        tu: "crees",
        elEllaUsted: "cree",
        nosotros: "creemos",
        ellosEllasUstedes: "creen"
      },
      preterite: {
        yo: "cre\xED",
        tu: "cre\xEDste",
        elEllaUsted: "crey\xF3",
        nosotros: "cre\xEDa",
        ellosEllasUstedes: "creyeron",
        irregular: true
      },
      imperfect: {
        yo: "cre\xEDa",
        tu: "cre\xEDas",
        elEllaUsted: "cre\xEDa",
        nosotros: "cre\xEDamos",
        ellosEllasUstedes: "cre\xEDan"
      },
      conditional: {
        yo: "creer\xEDa",
        tu: "creer\xEDas",
        elEllaUsted: "creer\xEDa",
        nosotros: "creer\xEDamos",
        ellosEllasUstedes: "creer\xEDan"
      },
      future: {
        yo: "creer\xE9",
        tu: "creer\xE1s",
        elEllaUsted: "creer\xE1",
        nosotros: "creeremos",
        ellosEllasUstedes: "creer\xE1n"
      }
    }
  },
  {
    name: "encontrar",
    englishMeaning: "to find",
    conjugation: {
      present: {
        yo: "encuentro",
        tu: "encuentras",
        elEllaUsted: "encuentra",
        nosotros: "encontramos",
        ellosEllasUstedes: "encuentran",
        irregular: true
      },
      preterite: {
        yo: "encontr\xE9",
        tu: "encontraste",
        elEllaUsted: "encontr\xF3",
        nosotros: "encontramos",
        ellosEllasUstedes: "encontraron"
      },
      imperfect: {
        yo: "encontraba",
        tu: "encontrabas",
        elEllaUsted: "encontraba",
        nosotros: "encontr\xE1bamos",
        ellosEllasUstedes: "encontraban"
      },
      conditional: {
        yo: "encontrar\xEDa",
        tu: "encontrar\xEDas",
        elEllaUsted: "encontrar\xEDa",
        nosotros: "encontrar\xEDamos",
        ellosEllasUstedes: "encontrar\xEDan"
      },
      future: {
        yo: "encontrar\xE9",
        tu: "encontrar\xE1s",
        elEllaUsted: "encontrar\xE1",
        nosotros: "encontraremos",
        ellosEllasUstedes: "encontrar\xE1n"
      }
    }
  },
  {
    name: "venir",
    englishMeaning: "to come",
    conjugation: {
      present: {
        yo: "vengo",
        tu: "vienes",
        elEllaUsted: "viene",
        nosotros: "venimos",
        ellosEllasUstedes: "vienen",
        irregular: true
      },
      preterite: {
        yo: "vine",
        tu: "viniste",
        elEllaUsted: "vino",
        nosotros: "vinimos",
        ellosEllasUstedes: "vinieron",
        irregular: true
      },
      imperfect: {
        yo: "ven\xEDa",
        tu: "ven\xEDas",
        elEllaUsted: "ven\xEDa",
        nosotros: "ven\xEDamos",
        ellosEllasUstedes: "ven\xEDan"
      },
      conditional: {
        yo: "vendr\xEDa",
        tu: "vendr\xEDas",
        elEllaUsted: "vendr\xEDa",
        nosotros: "vendr\xEDamos",
        ellosEllasUstedes: "vendr\xEDan",
        irregular: true
      },
      future: {
        yo: "vendr\xE9",
        tu: "vendr\xE1s",
        elEllaUsted: "vendr\xE1",
        nosotros: "vendremos",
        ellosEllasUstedes: "vendr\xE1n",
        irregular: true
      }
    }
  },
  {
    name: "pensar",
    englishMeaning: "to think",
    conjugation: {
      present: {
        yo: "pienso",
        tu: "piensas",
        elEllaUsted: "piensa",
        nosotros: "pensamos",
        ellosEllasUstedes: "piensan",
        irregular: true
      },
      preterite: {
        yo: "pens\xE9",
        tu: "pensaste",
        elEllaUsted: "pens\xF3",
        nosotros: "pensamos",
        ellosEllasUstedes: "pensaron"
      },
      imperfect: {
        yo: "pensaba",
        tu: "pensabas",
        elEllaUsted: "pensaba",
        nosotros: "pens\xE1bamos",
        ellosEllasUstedes: "pensaban"
      },
      conditional: {
        yo: "pensar\xEDa",
        tu: "pensar\xEDas",
        elEllaUsted: "pensar\xEDa",
        nosotros: "pensar\xEDamos",
        ellosEllasUstedes: "pensar\xEDan"
      },
      future: {
        yo: "pensar\xE9",
        tu: "pensar\xE1s",
        elEllaUsted: "pensar\xE1",
        nosotros: "pensaremos",
        ellosEllasUstedes: "pensar\xE1n"
      }
    }
  },
  {
    name: "conocer",
    englishMeaning: "to know, to meet, to get to know",
    conjugation: {
      present: {
        yo: "conozco",
        tu: "conoces",
        elEllaUsted: "conoci\xF3",
        nosotros: "conocemos",
        ellosEllasUstedes: "conocen",
        irregular: true
      },
      preterite: {
        yo: "conoc\xED",
        tu: "conociste",
        elEllaUsted: "conoci\xF3",
        nosotros: "conocimos",
        ellosEllasUstedes: "conocieron"
      },
      imperfect: {
        yo: "conoc\xEDa",
        tu: "conoc\xEDas",
        elEllaUsted: "conoc\xEDa",
        nosotros: "conoc\xEDamos",
        ellosEllasUstedes: "conoc\xEDan"
      },
      conditional: {
        yo: "conocer\xEDa",
        tu: "conocer\xEDas",
        elEllaUsted: "conocer\xEDa",
        nosotros: "conocer\xEDamos",
        ellosEllasUstedes: "conocer\xEDan"
      },
      future: {
        yo: "conocer\xE9",
        tu: "conocer\xE1s",
        elEllaUsted: "conocer\xE1",
        nosotros: "conoceremos",
        ellosEllasUstedes: "conocer\xE1n"
      }
    }
  },
];
