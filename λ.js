// Generated by CoffeeScript 1.7.1
(function() {
  var $0, $1, $2, $3, $4, $5, AND, FACTORIAL, FALSE, FIVE, FOUR, I, IFTHENELSE, ISZERO, MULT, NOT, ONE, OR, PLUS, POW, PRED, SUB, SUCC, THREE, TRUE, TWO, Y, ZERO, b, int;

  TRUE = function(x) {
    return function(y) {
      return x;
    };
  };

  FALSE = function(x) {
    return function(y) {
      return y;
    };
  };

  b = function(f) {
    return f(true)(false);
  };

  console.log(b(TRUE));

  console.log(b(FALSE));

  AND = function(p) {
    return function(q) {
      return p(q)(p);
    };
  };

  OR = function(p) {
    return function(q) {
      return p(p)(q);
    };
  };

  NOT = function(p) {
    return function(a) {
      return function(b) {
        return p(b)(a);
      };
    };
  };

  IFTHENELSE = function(p) {
    return function(a) {
      return function(b) {
        return p(a)(b);
      };
    };
  };

  AND(TRUE)(TRUE);

  console.log(b(AND(TRUE)(TRUE)));

  console.log(b(AND(TRUE)(FALSE)));

  console.log(b(AND(FALSE)(TRUE)));

  console.log(b(AND(FALSE)(FALSE)));

  ISZERO = function(n) {
    return n(function(x) {
      return FALSE;
    })(TRUE);
  };

  IFTHENELSE(TRUE)(THREE)(FOUR);

  IFTHENELSE(FALSE)(THREE)(FOUR);

  IFTHENELSE(ISZERO(ZERO))(THREE)(FOUR);

  IFTHENELSE(ISZERO(ONE))(THREE)(FOUR);

  $0 = ZERO = function(f) {
    return function(x) {
      return x;
    };
  };

  $1 = ONE = function(f) {
    return function(x) {
      return f(x);
    };
  };

  $2 = TWO = function(f) {
    return function(x) {
      return f(f(x));
    };
  };

  $3 = THREE = function(f) {
    return function(x) {
      return f(f(f(x)));
    };
  };

  $4 = FOUR = function(f) {
    return function(x) {
      return f(f(f(f(x))));
    };
  };

  $5 = FIVE = function(f) {
    return function(x) {
      return f(f(f(f(f(x)))));
    };
  };

  int = function(n) {
    return n(function(x) {
      return ++x;
    })(0);
  };

  SUCC = function(n) {
    return function(f) {
      return function(x) {
        return f(n(f)(x));
      };
    };
  };

  PLUS = function(m) {
    return function(n) {
      return function(f) {
        return function(x) {
          return m(f)(n(f)(x));
        };
      };
    };
  };

  PLUS = function(m) {
    return function(n) {
      return m(SUCC)(n);
    };
  };

  MULT = function(m) {
    return function(n) {
      return function(f) {
        return m(n(f));
      };
    };
  };

  POW = function(b) {
    return function(e) {
      return e(b);
    };
  };

  PRED = function(n) {
    return function(f) {
      return function(x) {
        return n(function(g) {
          return function(h) {
            return h(g(f));
          };
        })(function(u) {
          return x;
        })(function(u) {
          return u;
        });
      };
    };
  };

  SUB = function(m) {
    return function(n) {
      return n(PRED)(m);
    };
  };

  PLUS(ONE)(TWO);

  console.log(int(PLUS(ONE)(TWO)));

  console.log(int(SUCC(ONE)));

  console.log(int(MULT(TWO)(FIVE)));

  console.log(int(POW(TWO)(FIVE)));

  console.log(int(PRED(TWO)));

  console.log(int(SUB(THREE)(TWO)));

  console.log(int(SUB(TWO)(THREE)));

  I = function(x) {
    return x;
  };

  Y = function(g) {
    return (function(x) {
      return g(x(x));
    })(function(x) {
      return g(x(x));
    });
  };

  FACTORIAL = function(r) {
    return function(n) {
      return IFTHENELSE(ISZERO(n))(ONE)(MULT(n)(r(PRED(n))));
    };
  };

  Y(FACTORIAL)(FOUR);

}).call(this);
