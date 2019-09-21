import { Verb } from "./verb";
import { Pronoun } from "./pronouns";

export const verbs: Array<Verb> = [
  {
    name: "comer",
    englishMeaning: "to eat",
    conjugation: {
      present: {
        yo: "como",
        tu: "comes",
        elEllaUdsted: "come",
        nosotros: "comemos",
        ellosEllasUdstedes: "comen"
      },
      preterite: {
        yo: "com\xED",
        tu: "comiste",
        elEllaUdsted: "comi\xF3",
        nosotros: "comimos",
        ellosEllasUdstedes: "comieron"
      },
      imperfect: {
        yo: "com\xEDa",
        tu: "com\xEDas",
        elEllaUdsted: "com\xEDa",
        nosotros: "com\xEDamos",
        ellosEllasUdstedes: "com\xEDan"
      },
      conditional: {
        yo: "comer\xEDa",
        tu: "comer\xEDas",
        elEllaUdsted: "comer\xEDa",
        nosotros: "comer\xEDamos",
        ellosEllasUdstedes: "comer\xEDan"
      },
      future: {
        yo: "comer\xE9",
        tu: "comer\xE1s",
        elEllaUdsted: "comer\xE1",
        nosotros: "comeremos",
        ellosEllasUdstedes: "comer\xE1n"
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
        elEllaUdsted: "juega",
        nosotros: "jugamos",
        ellosEllasUdstedes: "juegan"
      },
      preterite: {
        yo: "jugu\xE9",
        tu: "jugaste",
        elEllaUdsted: "jug\xF3",
        nosotros: "jugamos",
        ellosEllasUdstedes: "jugaron"
      },
      imperfect: {
        yo: "jugaba",
        tu: "jugabas",
        elEllaUdsted: "jugaba",
        nosotros: "jug\xE1bamos",
        ellosEllasUdstedes: "jugaban"
      },
      conditional: {
        yo: "jugar\xEDa",
        tu: "jugar\xEDas",
        elEllaUdsted: "jugar\xEDa",
        nosotros: "jugar\xEDamos",
        ellosEllasUdstedes: "jugar\xEDan"
      },
      future: {
        yo: "jugar\xE9",
        tu: "jugar\xE1s",
        elEllaUdsted: "jugar\xE1",
        nosotros: "jugaremos",
        ellosEllasUdstedes: "jugar\xE1n"
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
        elEllaUdsted: "vive",
        nosotros: "vivimos",
        ellosEllasUdstedes: "viven"
      },
      preterite: {
        yo: "viv\xED",
        tu: "viviste",
        elEllaUdsted: "vivi\xF3",
        nosotros: "vivimos",
        ellosEllasUdstedes: "vivieron"
      },
      imperfect: {
        yo: "viv\xEDa",
        tu: "viv\xEDas",
        elEllaUdsted: "viv\xEDa",
        nosotros: "viv\xEDamos",
        ellosEllasUdstedes: "viv\xEDan"
      },
      conditional: {
        yo: "vivir\xEDa",
        tu: "vivir\xEDas",
        elEllaUdsted: "vivir\xEDa",
        nosotros: "vivir\xEDamos",
        ellosEllasUdstedes: "vivir\xEDan"
      },
      future: {
        yo: "vivir\xE9",
        tu: "vivir\xE1s",
        elEllaUdsted: "vivir\xE1",
        nosotros: "viviremos",
        ellosEllasUdstedes: "vivir\xE1n"
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
        elEllaUdsted: "ense\xF1a",
        nosotros: "ense\xF1amos",
        ellosEllasUdstedes: "ense\xF1an"
      },
      preterite: {
        yo: "ense\xF1\xE9",
        tu: "ense\xF1aste",
        elEllaUdsted: "ense\xF1\xF3",
        nosotros: "ense\xF1amos",
        ellosEllasUdstedes: "ense\xF1aron"
      },
      imperfect: {
        yo: "ense\xF1aba",
        tu: "ense\xF1abas",
        elEllaUdsted: "ense\xF1aba",
        nosotros: "ense\xF1\xE1bamos",
        ellosEllasUdstedes: "ense\xF1aban"
      },
      conditional: {
        yo: "ense\xF1ar\xEDa",
        tu: "ense\xF1ar\xEDas",
        elEllaUdsted: "ense\xF1ar\xEDa",
        nosotros: "ense\xF1ar\xEDamos",
        ellosEllasUdstedes: "ense\xF1ar\xEDan"
      },
      future: {
        yo: "ense\xF1ar\xE9",
        tu: "ense\xF1ar\xE1s",
        elEllaUdsted: "ense\xF1ar\xE1",
        nosotros: "ense\xF1aremos",
        ellosEllasUdstedes: "ense\xF1ar\xE1n"
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
        elEllaUdsted: "estudia",
        nosotros: "estudiamos",
        ellosEllasUdstedes: "estudian"
      },
      preterite: {
        yo: "estudi\xE9",
        tu: "estudiaste",
        elEllaUdsted: "estudi\xF3",
        nosotros: "estudiamos",
        ellosEllasUdstedes: "estudiaron"
      },
      imperfect: {
        yo: "estudiaba",
        tu: "estudiabas",
        elEllaUdsted: "estudiaba",
        nosotros: "estudi\xE1bamos",
        ellosEllasUdstedes: "estudiaban"
      },
      conditional: {
        yo: "estudiar\xEDa",
        tu: "estudiar\xEDas",
        elEllaUdsted: "estudiar\xEDa",
        nosotros: "estudiar\xEDamos",
        ellosEllasUdstedes: "estudiar\xEDan"
      },
      future: {
        yo: "estudiar\xE9",
        tu: "estudiar\xE1s",
        elEllaUdsted: "estudiar\xE1",
        nosotros: "estudiaremos",
        ellosEllasUdstedes: "estudiar\xE1n"
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
        elEllaUdsted: "dibuja",
        nosotros: "dibujamos",
        ellosEllasUdstedes: "dibujan"
      },
      preterite: {
        yo: "dibuj\xE9",
        tu: "dibujaste",
        elEllaUdsted: "dibuj\xF3",
        nosotros: "dibujamos",
        ellosEllasUdstedes: "dibujaron"
      },
      imperfect: {
        yo: "dibujaba",
        tu: "dibujabas",
        elEllaUdsted: "dibujaba",
        nosotros: "dibuj\xE1bamos",
        ellosEllasUdstedes: "dibujaban"
      },
      conditional: {
        yo: "dibujar\xEDa",
        tu: "dibujar\xEDas",
        elEllaUdsted: "dibujar\xEDa",
        nosotros: "dibujar\xEDamos",
        ellosEllasUdstedes: "dibujar\xEDan"
      },
      future: {
        yo: "dibujar\xE9",
        tu: "dibujar\xE1s",
        elEllaUdsted: "dibujar\xE1",
        nosotros: "dibujaremos",
        ellosEllasUdstedes: "dibujar\xE1n"
      }
    }
  },
  {
    name: "tocar",
    englishMeaning: "to play, play an instrument",
    conjugation: {
      present: {
        yo: "toco",
        tu: "tocas",
        elEllaUdsted: "toca",
        nosotros: "tocamos",
        ellosEllasUdstedes: "tocan"
      },
      preterite: {
        yo: "toqu\xE9",
        tu: "tocaste",
        elEllaUdsted: "toc\xF3",
        nosotros: "tocamos",
        ellosEllasUdstedes: "tocaron"
      },
      imperfect: {
        yo: "tocaba",
        tu: "tocabas",
        elEllaUdsted: "tocaba",
        nosotros: "toc\xE1bamos",
        ellosEllasUdstedes: "tocaban"
      },
      conditional: {
        yo: "tocar\xEDa",
        tu: "tocar\xEDas",
        elEllaUdsted: "tocar\xEDa",
        nosotros: "tocar\xEDamos",
        ellosEllasUdstedes: "tocar\xEDan"
      },
      future: {
        yo: "tocar\xE9",
        tu: "tocar\xE1s",
        elEllaUdsted: "tocar\xE1",
        nosotros: "tocaremos",
        ellosEllasUdstedes: "tocar\xE1n"
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
        elEllaUdsted: "camina",
        nosotros: "caminamos",
        ellosEllasUdstedes: "caminan"
      },
      preterite: {
        yo: "camin\xE9",
        tu: "caminaste",
        elEllaUdsted: "camin\xF3",
        nosotros: "caminamos",
        ellosEllasUdstedes: "caminaron"
      },
      imperfect: {
        yo: "caminaba",
        tu: "caminabas",
        elEllaUdsted: "caminaba",
        nosotros: "camin\xE1bamos",
        ellosEllasUdstedes: "caminaban"
      },
      conditional: {
        yo: "caminar\xEDa",
        tu: "caminar\xEDas",
        elEllaUdsted: "caminar\xEDa",
        nosotros: "caminar\xEDamos",
        ellosEllasUdstedes: "caminar\xEDan"
      },
      future: {
        yo: "caminar\xE9",
        tu: "caminar\xE1s",
        elEllaUdsted: "caminar\xE1",
        nosotros: "caminaremos",
        ellosEllasUdstedes: "caminar\xE1n"
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
        elEllaUdsted: "usa",
        nosotros: "usamos",
        ellosEllasUdstedes: "usan"
      },
      preterite: {
        yo: "us\xE9",
        tu: "usaste",
        elEllaUdsted: "us\xF3",
        nosotros: "usamos",
        ellosEllasUdstedes: "usaron"
      },
      imperfect: {
        yo: "usaba",
        tu: "usabas",
        elEllaUdsted: "usaba",
        nosotros: "us\xE1bamos",
        ellosEllasUdstedes: "usaban"
      },
      conditional: {
        yo: "usar\xEDa",
        tu: "usar\xEDas",
        elEllaUdsted: "usar\xEDa",
        nosotros: "usar\xEDamos",
        ellosEllasUdstedes: "usar\xEDan"
      },
      future: {
        yo: "usar\xE9",
        tu: "usar\xE1s",
        elEllaUdsted: "usar\xE1",
        nosotros: "usaremos",
        ellosEllasUdstedes: "usar\xE1n"
      }
    }
  },
  {
    name: "olvidar",
    englishMeaning: "to forget, forgive",
    conjugation: {
      present: {
        yo: "olvido",
        tu: "olvidas",
        elEllaUdsted: "olvida",
        nosotros: "olvidamos",
        ellosEllasUdstedes: "olvidan"
      },
      preterite: {
        yo: "olvid\xE9",
        tu: "olvidaste",
        elEllaUdsted: "olvid\xF3",
        nosotros: "olvidamos",
        ellosEllasUdstedes: "olvidaron"
      },
      imperfect: {
        yo: "olvidaba",
        tu: "olvidabas",
        elEllaUdsted: "olvidaba",
        nosotros: "olvid\xE1bamos",
        ellosEllasUdstedes: "olvidaban"
      },
      conditional: {
        yo: "olvidar\xEDa",
        tu: "olvidar\xEDas",
        elEllaUdsted: "olvidar\xEDa",
        nosotros: "olvidar\xEDamos",
        ellosEllasUdstedes: "olvidar\xEDan"
      },
      future: {
        yo: "olvidar\xE9",
        tu: "olvidar\xE1s",
        elEllaUdsted: "olvidar\xE1",
        nosotros: "olvidaremos",
        ellosEllasUdstedes: "olvidar\xE1n"
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
        elEllaUdsted: "viaja",
        nosotros: "viajamos",
        ellosEllasUdstedes: "viajan"
      },
      preterite: {
        yo: "viaj\xE9",
        tu: "viajaste",
        elEllaUdsted: "viaj\xF3",
        nosotros: "viajamos",
        ellosEllasUdstedes: "viajaron"
      },
      imperfect: {
        yo: "viajaba",
        tu: "viajabas",
        elEllaUdsted: "viajaba",
        nosotros: "viaj\xE1bamos",
        ellosEllasUdstedes: "viajaban"
      },
      conditional: {
        yo: "viajar\xEDa",
        tu: "viajar\xEDas",
        elEllaUdsted: "viajar\xEDa",
        nosotros: "viajar\xEDamos",
        ellosEllasUdstedes: "viajar\xEDan"
      },
      future: {
        yo: "viajar\xE9",
        tu: "viajar\xE1s",
        elEllaUdsted: "viajar\xE1",
        nosotros: "viajaremos",
        ellosEllasUdstedes: "viajar\xE1n"
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
        elEllaUdsted: "trabaja",
        nosotros: "trabajamos",
        ellosEllasUdstedes: "trabajan"
      },
      preterite: {
        yo: "trabaj\xE9",
        tu: "trabajaste",
        elEllaUdsted: "trabaj\xF3",
        nosotros: "trabajamos",
        ellosEllasUdstedes: "trabajaron"
      },
      imperfect: {
        yo: "trabajaba",
        tu: "trabajabas",
        elEllaUdsted: "trabajaba",
        nosotros: "trabaj\xE1bamos",
        ellosEllasUdstedes: "trabajaban"
      },
      conditional: {
        yo: "trabajar\xEDa",
        tu: "trabajar\xEDas",
        elEllaUdsted: "trabajar\xEDa",
        nosotros: "trabajar\xEDamos",
        ellosEllasUdstedes: "trabajar\xEDan"
      },
      future: {
        yo: "trabajar\xE9",
        tu: "trabajar\xE1s",
        elEllaUdsted: "trabajar\xE1",
        nosotros: "trabajaremos",
        ellosEllasUdstedes: "trabajar\xE1n"
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
        elEllaUdsted: "toma",
        nosotros: "tomamos",
        ellosEllasUdstedes: "toman"
      },
      preterite: {
        yo: "tom\xE9",
        tu: "tomaste",
        elEllaUdsted: "tom\xF3",
        nosotros: "tomamos",
        ellosEllasUdstedes: "tomaron"
      },
      imperfect: {
        yo: "tomaba",
        tu: "tomabas",
        elEllaUdsted: "tomaba",
        nosotros: "tom\xE1bamos",
        ellosEllasUdstedes: "tomaban"
      },
      conditional: {
        yo: "tomar\xEDa",
        tu: "tomar\xEDas",
        elEllaUdsted: "tomar\xEDa",
        nosotros: "tomar\xEDamos",
        ellosEllasUdstedes: "tomar\xEDan"
      },
      future: {
        yo: "tomar\xE9",
        tu: "tomar\xE1s",
        elEllaUdsted: "tomar\xE1",
        nosotros: "tomaremos",
        ellosEllasUdstedes: "tomar\xE1n"
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
        elEllaUdsted: "limpia",
        nosotros: "limpiamos",
        ellosEllasUdstedes: "limpian"
      },
      preterite: {
        yo: "limpi\xE9",
        tu: "limpiaste",
        elEllaUdsted: "limpi\xF3",
        nosotros: "limpiamos",
        ellosEllasUdstedes: "limpiaron"
      },
      imperfect: {
        yo: "limpiaba",
        tu: "limpiabas",
        elEllaUdsted: "limpiaba",
        nosotros: "limpi\xE1bamos",
        ellosEllasUdstedes: "limpiaban"
      },
      conditional: {
        yo: "limpiar\xEDa",
        tu: "limpiar\xEDas",
        elEllaUdsted: "limpiar\xEDa",
        nosotros: "limpiar\xEDamos",
        ellosEllasUdstedes: "limpiar\xEDan"
      },
      future: {
        yo: "limpiar\xE9",
        tu: "limpiar\xE1s",
        elEllaUdsted: "limpiar\xE1",
        nosotros: "limpiaremos",
        ellosEllasUdstedes: "limpiar\xE1n"
      }
    }
  },
  {
    name: "esperar",
    englishMeaning: "to hope",
    conjugation: {
      present: {
        yo: "espero",
        tu: "esperas",
        elEllaUdsted: "espera",
        nosotros: "esperamos",
        ellosEllasUdstedes: "esperan"
      },
      preterite: {
        yo: "esper\xE9",
        tu: "esperaste",
        elEllaUdsted: "esper\xF3",
        nosotros: "esperamos",
        ellosEllasUdstedes: "esperaron"
      },
      imperfect: {
        yo: "esperaba",
        tu: "esperabas",
        elEllaUdsted: "esperaba",
        nosotros: "esper\xE1bamos",
        ellosEllasUdstedes: "esperaban"
      },
      conditional: {
        yo: "esperar\xEDa",
        tu: "esperar\xEDas",
        elEllaUdsted: "esperar\xEDa",
        nosotros: "esperar\xEDamos",
        ellosEllasUdstedes: "esperar\xEDan"
      },
      future: {
        yo: "esperar\xE9",
        tu: "esperar\xE1s",
        elEllaUdsted: "esperar\xE1",
        nosotros: "esperaremos",
        ellosEllasUdstedes: "esperar\xE1n"
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
        elEllaUdsted: "entra",
        nosotros: "entramos",
        ellosEllasUdstedes: "entran"
      },
      preterite: {
        yo: "entr\xE9",
        tu: "entraste",
        elEllaUdsted: "entr\xF3",
        nosotros: "entramos",
        ellosEllasUdstedes: "entraron"
      },
      imperfect: {
        yo: "entraba",
        tu: "entrabas",
        elEllaUdsted: "entraba",
        nosotros: "entr\xE1bamos",
        ellosEllasUdstedes: "entraban"
      },
      conditional: {
        yo: "entrar\xEDa",
        tu: "entrar\xEDas",
        elEllaUdsted: "entrar\xEDa",
        nosotros: "entrar\xEDamos",
        ellosEllasUdstedes: "entrar\xEDan"
      },
      future: {
        yo: "entrar\xE9",
        tu: "entrar\xE1s",
        elEllaUdsted: "entrar\xE1",
        nosotros: "entraremos",
        ellosEllasUdstedes: "entrar\xE1n"
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
        elEllaUdsted: "deja",
        nosotros: "dejamos",
        ellosEllasUdstedes: "dejan"
      },
      preterite: {
        yo: "dej\xE9",
        tu: "dejaste",
        elEllaUdsted: "dej\xF3",
        nosotros: "dejamos",
        ellosEllasUdstedes: "dejaron"
      },
      imperfect: {
        yo: "dejaba",
        tu: "dejabas",
        elEllaUdsted: "dejaba",
        nosotros: "dej\xE1bamos",
        ellosEllasUdstedes: "dejaban"
      },
      conditional: {
        yo: "dejar\xEDa",
        tu: "dejar\xEDas",
        elEllaUdsted: "dejar\xEDa",
        nosotros: "dejar\xEDamos",
        ellosEllasUdstedes: "dejar\xEDan"
      },
      future: {
        yo: "dejar\xE9",
        tu: "dejar\xE1s",
        elEllaUdsted: "dejar\xE1",
        nosotros: "dejaremos",
        ellosEllasUdstedes: "dejar\xE1n"
      }
    }
  },
  {
    name: "mirar",
    englishMeaning: "to see, to watch",
    conjugation: {
      present: {
        yo: "miro",
        tu: "miras",
        elEllaUdsted: "mira",
        nosotros: "miramos",
        ellosEllasUdstedes: "miran"
      },
      preterite: {
        yo: "mir\xE9",
        tu: "miraste",
        elEllaUdsted: "mir\xF3",
        nosotros: "miramos",
        ellosEllasUdstedes: "miraron"
      },
      imperfect: {
        yo: "miraba",
        tu: "mirabas",
        elEllaUdsted: "miraba",
        nosotros: "mir\xE1bamos",
        ellosEllasUdstedes: "miraban"
      },
      conditional: {
        yo: "mirar\xEDa",
        tu: "mirar\xEDas",
        elEllaUdsted: "mirar\xEDa",
        nosotros: "mirar\xEDamos",
        ellosEllasUdstedes: "mirar\xEDan"
      },
      future: {
        yo: "mirar\xE9",
        tu: "mirar\xE1s",
        elEllaUdsted: "mirar\xE1",
        nosotros: "miraremos",
        ellosEllasUdstedes: "mirar\xE1n"
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
        elEllaUdsted: "paga",
        nosotros: "pagamos",
        ellosEllasUdstedes: "pagan"
      },
      preterite: {
        yo: "pagu\xE9",
        tu: "pagaste",
        elEllaUdsted: "pag\xF3",
        nosotros: "pagamos",
        ellosEllasUdstedes: "pagaron"
      },
      imperfect: {
        yo: "pagaba",
        tu: "pagabas",
        elEllaUdsted: "pagaba",
        nosotros: "pag\xE1bamos",
        ellosEllasUdstedes: "pagaban"
      },
      conditional: {
        yo: "pagar\xEDa",
        tu: "pagar\xEDas",
        elEllaUdsted: "pagar\xEDa",
        nosotros: "pagar\xEDamos",
        ellosEllasUdstedes: "pagar\xEDan"
      },
      future: {
        yo: "pagar\xE9",
        tu: "pagar\xE1s",
        elEllaUdsted: "pagar\xE1",
        nosotros: "pagaremos",
        ellosEllasUdstedes: "pagar\xE1n"
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
        elEllaUdsted: "prepara",
        nosotros: "preparamos",
        ellosEllasUdstedes: "preparan"
      },
      preterite: {
        yo: "prepar\xE9",
        tu: "preparaste",
        elEllaUdsted: "prepar\xF3",
        nosotros: "preparamos",
        ellosEllasUdstedes: "prepararon"
      },
      imperfect: {
        yo: "preparaba",
        tu: "preparabas",
        elEllaUdsted: "preparaba",
        nosotros: "prepar\xE1bamos",
        ellosEllasUdstedes: "preparaban"
      },
      conditional: {
        yo: "preparar\xEDa",
        tu: "preparar\xEDas",
        elEllaUdsted: "preparar\xEDa",
        nosotros: "preparar\xEDamos",
        ellosEllasUdstedes: "preparar\xEDan"
      },
      future: {
        yo: "preparar\xE9",
        tu: "preparar\xE1s",
        elEllaUdsted: "preparar\xE1",
        nosotros: "prepararemos",
        ellosEllasUdstedes: "preparar\xE1n"
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
        elEllaUdsted: "queda",
        nosotros: "quedamos",
        ellosEllasUdstedes: "quedan"
      },
      preterite: {
        yo: "qued\xE9",
        tu: "quedaste",
        elEllaUdsted: "qued\xF3",
        nosotros: "quedamos",
        ellosEllasUdstedes: "quedaron"
      },
      imperfect: {
        yo: "quedaba",
        tu: "quedabas",
        elEllaUdsted: "quedaba",
        nosotros: "qued\xE1bamos",
        ellosEllasUdstedes: "quedaban"
      },
      conditional: {
        yo: "quedar\xEDa",
        tu: "quedar\xEDas",
        elEllaUdsted: "quedar\xEDa",
        nosotros: "quedar\xEDamos",
        ellosEllasUdstedes: "quedar\xEDan"
      },
      future: {
        yo: "quedar\xE9",
        tu: "quedar\xE1s",
        elEllaUdsted: "quedar\xE1",
        nosotros: "quedaremos",
        ellosEllasUdstedes: "quedar\xE1n"
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
        elEllaUdsted: "tira",
        nosotros: "tiramos",
        ellosEllasUdstedes: "tiran"
      },
      preterite: {
        yo: "tir\xE9",
        tu: "tiraste",
        elEllaUdsted: "tir\xF3",
        nosotros: "tiramos",
        ellosEllasUdstedes: "tiraron"
      },
      imperfect: {
        yo: "tiraba",
        tu: "tirabas",
        elEllaUdsted: "tiraba",
        nosotros: "tir\xE1bamos",
        ellosEllasUdstedes: "tiraban"
      },
      conditional: {
        yo: "tirar\xEDa",
        tu: "tirar\xEDas",
        elEllaUdsted: "tirar\xEDa",
        nosotros: "tirar\xEDamos",
        ellosEllasUdstedes: "tirar\xEDan"
      },
      future: {
        yo: "tirar\xE9",
        tu: "tirar\xE1s",
        elEllaUdsted: "tirar\xE1",
        nosotros: "tiraremos",
        ellosEllasUdstedes: "tirar\xE1n"
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
        elEllaUdsted: "gana",
        nosotros: "ganamos",
        ellosEllasUdstedes: "ganan"
      },
      preterite: {
        yo: "gan\xE9",
        tu: "ganaste",
        elEllaUdsted: "gan\xF3",
        nosotros: "ganamos",
        ellosEllasUdstedes: "ganaron"
      },
      imperfect: {
        yo: "ganaba",
        tu: "ganabas",
        elEllaUdsted: "ganaba",
        nosotros: "gan\xE1bamos",
        ellosEllasUdstedes: "ganaban"
      },
      conditional: {
        yo: "ganar\xEDa",
        tu: "ganar\xEDas",
        elEllaUdsted: "ganar\xEDa",
        nosotros: "ganar\xEDamos",
        ellosEllasUdstedes: "ganar\xEDan"
      },
      future: {
        yo: "ganar\xE9",
        tu: "ganar\xE1s",
        elEllaUdsted: "ganar\xE1",
        nosotros: "ganaremos",
        ellosEllasUdstedes: "ganar\xE1n"
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
        elEllaUdsted: "ayuda",
        nosotros: "ayudamos",
        ellosEllasUdstedes: "ayudan"
      },
      preterite: {
        yo: "ayud\xE9",
        tu: "ayudaste",
        elEllaUdsted: "ayud\xF3",
        nosotros: "ayudamos",
        ellosEllasUdstedes: "ayudaron"
      },
      imperfect: {
        yo: "ayudaba",
        tu: "ayudabas",
        elEllaUdsted: "ayudaba",
        nosotros: "ayud\xE1bamos",
        ellosEllasUdstedes: "ayudaban"
      },
      conditional: {
        yo: "ayudar\xEDa",
        tu: "ayudar\xEDas",
        elEllaUdsted: "ayudar\xEDa",
        nosotros: "ayudar\xEDamos",
        ellosEllasUdstedes: "ayudar\xEDan"
      },
      future: {
        yo: "ayudar\xE9",
        tu: "ayudar\xE1s",
        elEllaUdsted: "ayudar\xE1",
        nosotros: "ayudaremos",
        ellosEllasUdstedes: "ayudar\xE1n"
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
        elEllaUdsted: "cambia",
        nosotros: "cambiamos",
        ellosEllasUdstedes: "cambian"
      },
      preterite: {
        yo: "cambi\xE9",
        tu: "cambiaste",
        elEllaUdsted: "cambi\xF3",
        nosotros: "cambiamos",
        ellosEllasUdstedes: "cambiaron"
      },
      imperfect: {
        yo: "cambiaba",
        tu: "cambiabas",
        elEllaUdsted: "cambiaba",
        nosotros: "cambi\xE1bamos",
        ellosEllasUdstedes: "cambiaban"
      },
      conditional: {
        yo: "cambiar\xEDa",
        tu: "cambiar\xEDas",
        elEllaUdsted: "cambiar\xEDa",
        nosotros: "cambiar\xEDamos",
        ellosEllasUdstedes: "cambiar\xEDan"
      },
      future: {
        yo: "cambiar\xE9",
        tu: "cambiar\xE1s",
        elEllaUdsted: "cambiar\xE1",
        nosotros: "cambiaremos",
        ellosEllasUdstedes: "cambiar\xE1n"
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
        elEllaUdsted: "ama",
        nosotros: "amamos",
        ellosEllasUdstedes: "aman"
      },
      preterite: {
        yo: "am\xE9",
        tu: "amaste",
        elEllaUdsted: "am\xF3",
        nosotros: "amamos",
        ellosEllasUdstedes: "amaron"
      },
      imperfect: {
        yo: "amaba",
        tu: "amabas",
        elEllaUdsted: "amaba",
        nosotros: "am\xE1bamos",
        ellosEllasUdstedes: "amaban"
      },
      conditional: {
        yo: "amar\xEDa",
        tu: "amar\xEDas",
        elEllaUdsted: "amar\xEDa",
        nosotros: "amar\xEDamos",
        ellosEllasUdstedes: "amar\xEDan"
      },
      future: {
        yo: "amar\xE9",
        tu: "amar\xE1s",
        elEllaUdsted: "amar\xE1",
        nosotros: "amaremos",
        ellosEllasUdstedes: "amar\xE1n"
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
        elEllaUdsted: "baila",
        nosotros: "bailamos",
        ellosEllasUdstedes: "bailan"
      },
      preterite: {
        yo: "bail\xE9",
        tu: "bailaste",
        elEllaUdsted: "bail\xF3",
        nosotros: "bailamos",
        ellosEllasUdstedes: "bailaron"
      },
      imperfect: {
        yo: "bailaba",
        tu: "bailabas",
        elEllaUdsted: "bailaba",
        nosotros: "bail\xE1bamos",
        ellosEllasUdstedes: "bailaban"
      },
      conditional: {
        yo: "bailar\xEDa",
        tu: "bailar\xEDas",
        elEllaUdsted: "bailar\xEDa",
        nosotros: "bailar\xEDamos",
        ellosEllasUdstedes: "bailar\xEDan"
      },
      future: {
        yo: "bailar\xE9",
        tu: "bailar\xE1s",
        elEllaUdsted: "bailar\xE1",
        nosotros: "bailaremos",
        ellosEllasUdstedes: "bailar\xE1n"
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
        elEllaUdsted: "aprenda",
        nosotros: "aprendamos",
        ellosEllasUdstedes: "aprendan"
      },
      preterite: {
        yo: "aprend\xE9",
        tu: "aprendaste",
        elEllaUdsted: "aprend\xF3",
        nosotros: "aprendamos",
        ellosEllasUdstedes: "aprendaron"
      },
      imperfect: {
        yo: "aprendaba",
        tu: "aprendabas",
        elEllaUdsted: "aprendaba",
        nosotros: "aprend\xE1bamos",
        ellosEllasUdstedes: "aprendaban"
      },
      conditional: {
        yo: "aprendar\xEDa",
        tu: "aprendar\xEDas",
        elEllaUdsted: "aprendar\xEDa",
        nosotros: "aprendar\xEDamos",
        ellosEllasUdstedes: "aprendar\xEDan"
      },
      future: {
        yo: "aprendar\xE9",
        tu: "aprendar\xE1s",
        elEllaUdsted: "aprendar\xE1",
        nosotros: "aprendaremos",
        ellosEllasUdstedes: "aprendar\xE1n"
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
        elEllaUdsted: "barre",
        nosotros: "barremos",
        ellosEllasUdstedes: "barren"
      },
      preterite: {
        yo: "barr\xED",
        tu: "barriste",
        elEllaUdsted: "barri\xF3",
        nosotros: "barrimos",
        ellosEllasUdstedes: "barrieron"
      },
      imperfect: {
        yo: "barr\xEDa",
        tu: "barr\xEDas",
        elEllaUdsted: "barr\xEDa",
        nosotros: "barr\xEDamos",
        ellosEllasUdstedes: "barr\xEDan"
      },
      conditional: {
        yo: "barrer\xEDa",
        tu: "barrer\xEDas",
        elEllaUdsted: "barrer\xEDa",
        nosotros: "barrer\xEDamos",
        ellosEllasUdstedes: "barrer\xEDan"
      },
      future: {
        yo: "barrer\xE9",
        tu: "barrer\xE1s",
        elEllaUdsted: "barrer\xE1",
        nosotros: "barreremos",
        ellosEllasUdstedes: "barrer\xE1n"
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
        elEllaUdsted: "bebe",
        nosotros: "bebemos",
        ellosEllasUdstedes: "beben"
      },
      preterite: {
        yo: "beb\xED",
        tu: "bebiste",
        elEllaUdsted: "bebi\xF3",
        nosotros: "bebimos",
        ellosEllasUdstedes: "bebieron"
      },
      imperfect: {
        yo: "beb\xEDa",
        tu: "beb\xEDas",
        elEllaUdsted: "beb\xEDa",
        nosotros: "beb\xEDamos",
        ellosEllasUdstedes: "beb\xEDan"
      },
      conditional: {
        yo: "beber\xEDa",
        tu: "beber\xEDas",
        elEllaUdsted: "beber\xEDa",
        nosotros: "beber\xEDamos",
        ellosEllasUdstedes: "beber\xEDan"
      },
      future: {
        yo: "beber\xE9",
        tu: "beber\xE1s",
        elEllaUdsted: "beber\xE1",
        nosotros: "beberemos",
        ellosEllasUdstedes: "beber\xE1n"
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
        elEllaUdsted: "comprende",
        nosotros: "comprendemos",
        ellosEllasUdstedes: "comprenden"
      },
      preterite: {
        yo: "comprend\xED",
        tu: "comprendiste",
        elEllaUdsted: "comprendi\xF3",
        nosotros: "comprendimos",
        ellosEllasUdstedes: "comprendieron"
      },
      imperfect: {
        yo: "comprend\xEDa",
        tu: "comprend\xEDas",
        elEllaUdsted: "comprend\xEDa",
        nosotros: "comprend\xEDamos",
        ellosEllasUdstedes: "comprend\xEDan"
      },
      conditional: {
        yo: "comprender\xEDa",
        tu: "comprender\xEDas",
        elEllaUdsted: "comprender\xEDa",
        nosotros: "comprender\xEDamos",
        ellosEllasUdstedes: "comprender\xEDan"
      },
      future: {
        yo: "comprender\xE9",
        tu: "comprender\xE1s",
        elEllaUdsted: "comprender\xE1",
        nosotros: "comprenderemos",
        ellosEllasUdstedes: "comprender\xE1n"
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
        elEllaUdsted: "corre",
        nosotros: "corremos",
        ellosEllasUdstedes: "corren"
      },
      preterite: {
        yo: "corr\xED",
        tu: "corriste",
        elEllaUdsted: "corri\xF3",
        nosotros: "corrimos",
        ellosEllasUdstedes: "corrieron"
      },
      imperfect: {
        yo: "corr\xEDa",
        tu: "corr\xEDas",
        elEllaUdsted: "corr\xEDa",
        nosotros: "corr\xEDamos",
        ellosEllasUdstedes: "corr\xEDan"
      },
      conditional: {
        yo: "correr\xEDa",
        tu: "correr\xEDas",
        elEllaUdsted: "correr\xEDa",
        nosotros: "correr\xEDamos",
        ellosEllasUdstedes: "correr\xEDan"
      },
      future: {
        yo: "correr\xE9",
        tu: "correr\xE1s",
        elEllaUdsted: "correr\xE1",
        nosotros: "correremos",
        ellosEllasUdstedes: "correr\xE1n"
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
        elEllaUdsted: "debe",
        nosotros: "debemos",
        ellosEllasUdstedes: "deben"
      },
      preterite: {
        yo: "deb\xED",
        tu: "debiste",
        elEllaUdsted: "debi\xF3",
        nosotros: "debimos",
        ellosEllasUdstedes: "debieron"
      },
      imperfect: {
        yo: "deb\xEDa",
        tu: "deb\xEDas",
        elEllaUdsted: "deb\xEDa",
        nosotros: "deb\xEDamos",
        ellosEllasUdstedes: "deb\xEDan"
      },
      conditional: {
        yo: "deber\xEDa",
        tu: "deber\xEDas",
        elEllaUdsted: "deber\xEDa",
        nosotros: "deber\xEDamos",
        ellosEllasUdstedes: "deber\xEDan"
      },
      future: {
        yo: "deber\xE9",
        tu: "deber\xE1s",
        elEllaUdsted: "deber\xE1",
        nosotros: "deberemos",
        ellosEllasUdstedes: "deber\xE1n"
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
        elEllaUdsted: "lee",
        nosotros: "leemos",
        ellosEllasUdstedes: "leen"
      },
      preterite: {
        yo: "le\xED",
        tu: "le\xEDste",
        elEllaUdsted: "ley\xF3",
        nosotros: "le\xEDmos",
        ellosEllasUdstedes: "leyeron"
      },
      imperfect: {
        yo: "le\xEDa",
        tu: "le\xEDas",
        elEllaUdsted: "le\xEDa",
        nosotros: "le\xEDamos",
        ellosEllasUdstedes: "le\xEDan"
      },
      conditional: {
        yo: "leer\xEDa",
        tu: "leer\xEDas",
        elEllaUdsted: "leer\xEDa",
        nosotros: "leer\xEDamos",
        ellosEllasUdstedes: "leer\xEDan"
      },
      future: {
        yo: "leer\xE9",
        tu: "leer\xE1s",
        elEllaUdsted: "leer\xE1",
        nosotros: "leeremos",
        ellosEllasUdstedes: "leer\xE1n"
      }
    }
  },
  {
    name: "meter",
    englishMeaning: "to put, insert",
    conjugation: {
      present: {
        yo: "meto",
        tu: "metes",
        elEllaUdsted: "mete",
        nosotros: "metemos",
        ellosEllasUdstedes: "meten"
      },
      preterite: {
        yo: "met\xED",
        tu: "metiste",
        elEllaUdsted: "meti\xF3",
        nosotros: "metimos",
        ellosEllasUdstedes: "metieron"
      },
      imperfect: {
        yo: "met\xEDa",
        tu: "met\xEDas",
        elEllaUdsted: "met\xEDa",
        nosotros: "met\xEDamos",
        ellosEllasUdstedes: "met\xEDan"
      },
      conditional: {
        yo: "meter\xEDa",
        tu: "meter\xEDas",
        elEllaUdsted: "meter\xEDa",
        nosotros: "meter\xEDamos",
        ellosEllasUdstedes: "meter\xEDan"
      },
      future: {
        yo: "meter\xE9",
        tu: "meter\xE1s",
        elEllaUdsted: "meter\xE1",
        nosotros: "meteremos",
        ellosEllasUdstedes: "meter\xE1n"
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
        elEllaUdsted: "prende",
        nosotros: "prendemos",
        ellosEllasUdstedes: "prenden"
      },
      preterite: {
        yo: "prend\xED",
        tu: "prendiste",
        elEllaUdsted: "prendi\xF3",
        nosotros: "prendimos",
        ellosEllasUdstedes: "prendieron"
      },
      imperfect: {
        yo: "prend\xEDa",
        tu: "prend\xEDas",
        elEllaUdsted: "prend\xEDa",
        nosotros: "prend\xEDamos",
        ellosEllasUdstedes: "prend\xEDan"
      },
      conditional: {
        yo: "prender\xEDa",
        tu: "prender\xEDas",
        elEllaUdsted: "prender\xEDa",
        nosotros: "prender\xEDamos",
        ellosEllasUdstedes: "prender\xEDan"
      },
      future: {
        yo: "prender\xE9",
        tu: "prender\xE1s",
        elEllaUdsted: "prender\xE1",
        nosotros: "prenderemos",
        ellosEllasUdstedes: "prender\xE1n"
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
        elEllaUdsted: "rompe",
        nosotros: "rompemos",
        ellosEllasUdstedes: "rompen"
      },
      preterite: {
        yo: "romp\xED",
        tu: "rompiste",
        elEllaUdsted: "rompi\xF3",
        nosotros: "rompimos",
        ellosEllasUdstedes: "rompieron"
      },
      imperfect: {
        yo: "romp\xEDa",
        tu: "romp\xEDas",
        elEllaUdsted: "romp\xEDa",
        nosotros: "romp\xEDamos",
        ellosEllasUdstedes: "romp\xEDan"
      },
      conditional: {
        yo: "romper\xEDa",
        tu: "romper\xEDas",
        elEllaUdsted: "romper\xEDa",
        nosotros: "romper\xEDamos",
        ellosEllasUdstedes: "romper\xEDan"
      },
      future: {
        yo: "romper\xE9",
        tu: "romper\xE1s",
        elEllaUdsted: "romper\xE1",
        nosotros: "romperemos",
        ellosEllasUdstedes: "romper\xE1n"
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
        elEllaUdsted: "teme",
        nosotros: "tememos",
        ellosEllasUdstedes: "temen"
      },
      preterite: {
        yo: "tem\xED",
        tu: "temiste",
        elEllaUdsted: "temi\xF3",
        nosotros: "temimos",
        ellosEllasUdstedes: "temieron"
      },
      imperfect: {
        yo: "tem\xEDa",
        tu: "tem\xEDas",
        elEllaUdsted: "tem\xEDa",
        nosotros: "tem\xEDamos",
        ellosEllasUdstedes: "tem\xEDan"
      },
      conditional: {
        yo: "temer\xEDa",
        tu: "temer\xEDas",
        elEllaUdsted: "temer\xEDa",
        nosotros: "temer\xEDamos",
        ellosEllasUdstedes: "temer\xEDan"
      },
      future: {
        yo: "temer\xE9",
        tu: "temer\xE1s",
        elEllaUdsted: "temer\xE1",
        nosotros: "temeremos",
        ellosEllasUdstedes: "temer\xE1n"
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
        elEllaUdsted: "tose",
        nosotros: "tosemos",
        ellosEllasUdstedes: "tosen"
      },
      preterite: {
        yo: "tos\xED",
        tu: "tosiste",
        elEllaUdsted: "tosi\xF3",
        nosotros: "tosimos",
        ellosEllasUdstedes: "tosieron"
      },
      imperfect: {
        yo: "tos\xEDa",
        tu: "tos\xEDas",
        elEllaUdsted: "tos\xEDa",
        nosotros: "tos\xEDamos",
        ellosEllasUdstedes: "tos\xEDan"
      },
      conditional: {
        yo: "toser\xEDa",
        tu: "toser\xEDas",
        elEllaUdsted: "toser\xEDa",
        nosotros: "toser\xEDamos",
        ellosEllasUdstedes: "toser\xEDan"
      },
      future: {
        yo: "toser\xE9",
        tu: "toser\xE1s",
        elEllaUdsted: "toser\xE1",
        nosotros: "toseremos",
        ellosEllasUdstedes: "toser\xE1n"
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
        elEllaUdsted: "vende",
        nosotros: "vendemos",
        ellosEllasUdstedes: "venden"
      },
      preterite: {
        yo: "vend\xED",
        tu: "vendiste",
        elEllaUdsted: "vendi\xF3",
        nosotros: "vendimos",
        ellosEllasUdstedes: "vendieron"
      },
      imperfect: {
        yo: "vend\xEDa",
        tu: "vend\xEDas",
        elEllaUdsted: "vend\xEDa",
        nosotros: "vend\xEDamos",
        ellosEllasUdstedes: "vend\xEDan"
      },
      conditional: {
        yo: "vender\xEDa",
        tu: "vender\xEDas",
        elEllaUdsted: "vender\xEDa",
        nosotros: "vender\xEDamos",
        ellosEllasUdstedes: "vender\xEDan"
      },
      future: {
        yo: "vender\xE9",
        tu: "vender\xE1s",
        elEllaUdsted: "vender\xE1",
        nosotros: "venderemos",
        ellosEllasUdstedes: "vender\xE1n"
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
        elEllaUdsted: "abre",
        nosotros: "abrimos",
        ellosEllasUdstedes: "abren"
      },
      preterite: {
        yo: "abr\xED",
        tu: "abriste",
        elEllaUdsted: "abri\xF3",
        nosotros: "abrimos",
        ellosEllasUdstedes: "abrieron"
      },
      imperfect: {
        yo: "abr\xEDa",
        tu: "abr\xEDas",
        elEllaUdsted: "abr\xEDa",
        nosotros: "abr\xEDamos",
        ellosEllasUdstedes: "abr\xEDan"
      },
      conditional: {
        yo: "abrir\xEDa",
        tu: "abrir\xEDas",
        elEllaUdsted: "abrir\xEDa",
        nosotros: "abrir\xEDamos",
        ellosEllasUdstedes: "abrir\xEDan"
      },
      future: {
        yo: "abrir\xE9",
        tu: "abrir\xE1s",
        elEllaUdsted: "abrir\xE1",
        nosotros: "abriremos",
        ellosEllasUdstedes: "abrir\xE1n"
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
        elEllaUdsted: "a\xF1ade",
        nosotros: "a\xF1adimos",
        ellosEllasUdstedes: "a\xF1aden"
      },
      preterite: {
        yo: "a\xF1ad\xED",
        tu: "a\xF1adiste",
        elEllaUdsted: "a\xF1adi\xF3",
        nosotros: "a\xF1adimos",
        ellosEllasUdstedes: "a\xF1adieron"
      },
      imperfect: {
        yo: "a\xF1ad\xEDa",
        tu: "a\xF1ad\xEDas",
        elEllaUdsted: "a\xF1ad\xEDa",
        nosotros: "a\xF1ad\xEDamos",
        ellosEllasUdstedes: "a\xF1ad\xEDan"
      },
      conditional: {
        yo: "a\xF1adir\xEDa",
        tu: "a\xF1adir\xEDas",
        elEllaUdsted: "a\xF1adir\xEDa",
        nosotros: "a\xF1adir\xEDamos",
        ellosEllasUdstedes: "a\xF1adir\xEDan"
      },
      future: {
        yo: "a\xF1adir\xE9",
        tu: "a\xF1adir\xE1s",
        elEllaUdsted: "a\xF1adir\xE1",
        nosotros: "a\xF1adiremos",
        ellosEllasUdstedes: "a\xF1adir\xE1n"
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
        elEllaUdsted: "asiste",
        nosotros: "asistimos",
        ellosEllasUdstedes: "asisten"
      },
      preterite: {
        yo: "asist\xED",
        tu: "asististe",
        elEllaUdsted: "asisti\xF3",
        nosotros: "asistimos",
        ellosEllasUdstedes: "asistieron"
      },
      imperfect: {
        yo: "asist\xEDa",
        tu: "asist\xEDas",
        elEllaUdsted: "asist\xEDa",
        nosotros: "asist\xEDamos",
        ellosEllasUdstedes: "asist\xEDan"
      },
      conditional: {
        yo: "asistir\xEDa",
        tu: "asistir\xEDas",
        elEllaUdsted: "asistir\xEDa",
        nosotros: "asistir\xEDamos",
        ellosEllasUdstedes: "asistir\xEDan"
      },
      future: {
        yo: "asistir\xE9",
        tu: "asistir\xE1s",
        elEllaUdsted: "asistir\xE1",
        nosotros: "asistiremos",
        ellosEllasUdstedes: "asistir\xE1n"
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
        elEllaUdsted: "describe",
        nosotros: "describimos",
        ellosEllasUdstedes: "describen"
      },
      preterite: {
        yo: "describ\xED",
        tu: "describiste",
        elEllaUdsted: "describi\xF3",
        nosotros: "describimos",
        ellosEllasUdstedes: "describieron"
      },
      imperfect: {
        yo: "describ\xEDa",
        tu: "describ\xEDas",
        elEllaUdsted: "describ\xEDa",
        nosotros: "describ\xEDamos",
        ellosEllasUdstedes: "describ\xEDan"
      },
      conditional: {
        yo: "describir\xEDa",
        tu: "describir\xEDas",
        elEllaUdsted: "describir\xEDa",
        nosotros: "describir\xEDamos",
        ellosEllasUdstedes: "describir\xEDan"
      },
      future: {
        yo: "describir\xE9",
        tu: "describir\xE1s",
        elEllaUdsted: "describir\xE1",
        nosotros: "describiremos",
        ellosEllasUdstedes: "describir\xE1n"
      }
    }
  },
  {
    name: "discutir",
    englishMeaning: "to discuss",
    conjugation: {
      present: {
        yo: "discuto",
        tu: "discutes",
        elEllaUdsted: "discute",
        nosotros: "discutimos",
        ellosEllasUdstedes: "discuten"
      },
      preterite: {
        yo: "discut\xED",
        tu: "discutiste",
        elEllaUdsted: "discuti\xF3",
        nosotros: "discutimos",
        ellosEllasUdstedes: "discutieron"
      },
      imperfect: {
        yo: "discut\xEDa",
        tu: "discut\xEDas",
        elEllaUdsted: "discut\xEDa",
        nosotros: "discut\xEDamos",
        ellosEllasUdstedes: "discut\xEDan"
      },
      conditional: {
        yo: "discutir\xEDa",
        tu: "discutir\xEDas",
        elEllaUdsted: "discutir\xEDa",
        nosotros: "discutir\xEDamos",
        ellosEllasUdstedes: "discutir\xEDan"
      },
      future: {
        yo: "discutir\xE9",
        tu: "discutir\xE1s",
        elEllaUdsted: "discutir\xE1",
        nosotros: "discutiremos",
        ellosEllasUdstedes: "discutir\xE1n"
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
        elEllaUdsted: "escribe",
        nosotros: "escribimos",
        ellosEllasUdstedes: "escriben"
      },
      preterite: {
        yo: "escrib\xED",
        tu: "escribiste",
        elEllaUdsted: "escribi\xF3",
        nosotros: "escribimos",
        ellosEllasUdstedes: "escribieron"
      },
      imperfect: {
        yo: "escrib\xEDa",
        tu: "escrib\xEDas",
        elEllaUdsted: "escrib\xEDa",
        nosotros: "escrib\xEDamos",
        ellosEllasUdstedes: "escrib\xEDan"
      },
      conditional: {
        yo: "escribir\xEDa",
        tu: "escribir\xEDas",
        elEllaUdsted: "escribir\xEDa",
        nosotros: "escribir\xEDamos",
        ellosEllasUdstedes: "escribir\xEDan"
      },
      future: {
        yo: "escribir\xE9",
        tu: "escribir\xE1s",
        elEllaUdsted: "escribir\xE1",
        nosotros: "escribiremos",
        ellosEllasUdstedes: "escribir\xE1n"
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
        elEllaUdsted: "ocurre",
        nosotros: "ocurrimos",
        ellosEllasUdstedes: "ocurren"
      },
      preterite: {
        yo: "ocurr\xED",
        tu: "ocurriste",
        elEllaUdsted: "ocurri\xF3",
        nosotros: "ocurrimos",
        ellosEllasUdstedes: "ocurrieron"
      },
      imperfect: {
        yo: "ocurr\xEDa",
        tu: "ocurr\xEDas",
        elEllaUdsted: "ocurr\xEDa",
        nosotros: "ocurr\xEDamos",
        ellosEllasUdstedes: "ocurr\xEDan"
      },
      conditional: {
        yo: "ocurrir\xEDa",
        tu: "ocurrir\xEDas",
        elEllaUdsted: "ocurrir\xEDa",
        nosotros: "ocurrir\xEDamos",
        ellosEllasUdstedes: "ocurrir\xEDan"
      },
      future: {
        yo: "ocurrir\xE9",
        tu: "ocurrir\xE1s",
        elEllaUdsted: "ocurrir\xE1",
        nosotros: "ocurriremos",
        ellosEllasUdstedes: "ocurrir\xE1n"
      }
    }
  },
  {
    name: "recibir",
    englishMeaning: "to recieve",
    conjugation: {
      present: {
        yo: "recibo",
        tu: "recibes",
        elEllaUdsted: "recibe",
        nosotros: "recibimos",
        ellosEllasUdstedes: "reciben"
      },
      preterite: {
        yo: "recib\xED",
        tu: "recibiste",
        elEllaUdsted: "recibi\xF3",
        nosotros: "recibimos",
        ellosEllasUdstedes: "recibieron"
      },
      imperfect: {
        yo: "recib\xEDa",
        tu: "recib\xEDas",
        elEllaUdsted: "recib\xEDa",
        nosotros: "recib\xEDamos",
        ellosEllasUdstedes: "recib\xEDan"
      },
      conditional: {
        yo: "recibir\xEDa",
        tu: "recibir\xEDas",
        elEllaUdsted: "recibir\xEDa",
        nosotros: "recibir\xEDamos",
        ellosEllasUdstedes: "recibir\xEDan"
      },
      future: {
        yo: "recibir\xE9",
        tu: "recibir\xE1s",
        elEllaUdsted: "recibir\xE1",
        nosotros: "recibiremos",
        ellosEllasUdstedes: "recibir\xE1n"
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
        elEllaUdsted: "sube",
        nosotros: "subimos",
        ellosEllasUdstedes: "suben"
      },
      preterite: {
        yo: "sub\xED",
        tu: "subiste",
        elEllaUdsted: "subi\xF3",
        nosotros: "subimos",
        ellosEllasUdstedes: "subieron"
      },
      imperfect: {
        yo: "sub\xEDa",
        tu: "sub\xEDas",
        elEllaUdsted: "sub\xEDa",
        nosotros: "sub\xEDamos",
        ellosEllasUdstedes: "sub\xEDan"
      },
      conditional: {
        yo: "subir\xEDa",
        tu: "subir\xEDas",
        elEllaUdsted: "subir\xEDa",
        nosotros: "subir\xEDamos",
        ellosEllasUdstedes: "subir\xEDan"
      },
      future: {
        yo: "subir\xE9",
        tu: "subir\xE1s",
        elEllaUdsted: "subir\xE1",
        nosotros: "subiremos",
        ellosEllasUdstedes: "subir\xE1n"
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
        elEllaUdsted: "sufre",
        nosotros: "sufrimos",
        ellosEllasUdstedes: "sufren"
      },
      preterite: {
        yo: "sufr\xED",
        tu: "sufriste",
        elEllaUdsted: "sufri\xF3",
        nosotros: "sufrimos",
        ellosEllasUdstedes: "sufrieron"
      },
      imperfect: {
        yo: "sufr\xEDa",
        tu: "sufr\xEDas",
        elEllaUdsted: "sufr\xEDa",
        nosotros: "sufr\xEDamos",
        ellosEllasUdstedes: "sufr\xEDan"
      },
      conditional: {
        yo: "sufrir\xEDa",
        tu: "sufrir\xEDas",
        elEllaUdsted: "sufrir\xEDa",
        nosotros: "sufrir\xEDamos",
        ellosEllasUdstedes: "sufrir\xEDan"
      },
      future: {
        yo: "sufrir\xE9",
        tu: "sufrir\xE1s",
        elEllaUdsted: "sufrir\xE1",
        nosotros: "sufriremos",
        ellosEllasUdstedes: "sufrir\xE1n"
      }
    }
  }
];
