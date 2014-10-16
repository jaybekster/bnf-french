parser = (function() {
  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column, preResult) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;
    this.result = preResult;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = peg$FAILED,
        peg$c1 = [],
        peg$c2 = " ",
        peg$c3 = { type: "literal", value: " ", description: "\" \"" },
        peg$c4 = "cent ",
        peg$c5 = { type: "literal", value: "cent ", description: "\"cent \"" },
        peg$c6 = function(a, b) { return a*100 + b; },
        peg$c7 = "cent-",
        peg$c8 = { type: "literal", value: "cent-", description: "\"cent-\"" },
        peg$c9 = "cents",
        peg$c10 = { type: "literal", value: "cents", description: "\"cents\"" },
        peg$c11 = function(a) { return a*100; },
        peg$c12 = function(b) { return 100 + b; },
        peg$c13 = "cent",
        peg$c14 = { type: "literal", value: "cent", description: "\"cent\"" },
        peg$c15 = function() { return 100; },
        peg$c16 = "zero",
        peg$c17 = { type: "literal", value: "zero", description: "\"zero\"" },
        peg$c18 = function() { return 0; },
        peg$c19 = "soixante",
        peg$c20 = { type: "literal", value: "soixante", description: "\"soixante\"" },
        peg$c21 = "-",
        peg$c22 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c23 = function(i) { return 60 + i; },
        peg$c24 = "-et-",
        peg$c25 = { type: "literal", value: "-et-", description: "\"-et-\"" },
        peg$c26 = function() { return 71; },
        peg$c27 = function() { return 60; },
        peg$c28 = "quatre-vingts",
        peg$c29 = { type: "literal", value: "quatre-vingts", description: "\"quatre-vingts\"" },
        peg$c30 = function(i) { return 80 + i; },
        peg$c31 = function() { return 80; },
        peg$c32 = "quatre-vingt",
        peg$c33 = { type: "literal", value: "quatre-vingt", description: "\"quatre-vingt\"" },
        peg$c34 = function() { return 90; },
        peg$c35 = function(a, b) { return a*10 +b; },
        peg$c36 = function(a) { return a*10; },
        peg$c37 = "cinquante",
        peg$c38 = { type: "literal", value: "cinquante", description: "\"cinquante\"" },
        peg$c39 = function() { return 5; },
        peg$c40 = "quarante",
        peg$c41 = { type: "literal", value: "quarante", description: "\"quarante\"" },
        peg$c42 = function() { return 4; },
        peg$c43 = "trente",
        peg$c44 = { type: "literal", value: "trente", description: "\"trente\"" },
        peg$c45 = function() { return 3; },
        peg$c46 = "vingt",
        peg$c47 = { type: "literal", value: "vingt", description: "\"vingt\"" },
        peg$c48 = function() { return 2; },
        peg$c49 = "et-",
        peg$c50 = { type: "literal", value: "et-", description: "\"et-\"" },
        peg$c51 = function() { return 1; },
        peg$c52 = function(i) { return 10 + i; },
        peg$c53 = "seize",
        peg$c54 = { type: "literal", value: "seize", description: "\"seize\"" },
        peg$c55 = function() { return 16; },
        peg$c56 = "quinze",
        peg$c57 = { type: "literal", value: "quinze", description: "\"quinze\"" },
        peg$c58 = function() { return 15; },
        peg$c59 = "quatorze",
        peg$c60 = { type: "literal", value: "quatorze", description: "\"quatorze\"" },
        peg$c61 = function() { return 14; },
        peg$c62 = "treize",
        peg$c63 = { type: "literal", value: "treize", description: "\"treize\"" },
        peg$c64 = function() { return 13; },
        peg$c65 = "douze",
        peg$c66 = { type: "literal", value: "douze", description: "\"douze\"" },
        peg$c67 = function() { return 12; },
        peg$c68 = "onze",
        peg$c69 = { type: "literal", value: "onze", description: "\"onze\"" },
        peg$c70 = function() { return 11; },
        peg$c71 = "dix",
        peg$c72 = { type: "literal", value: "dix", description: "\"dix\"" },
        peg$c73 = function() { return 10; },
        peg$c74 = "neuf",
        peg$c75 = { type: "literal", value: "neuf", description: "\"neuf\"" },
        peg$c76 = function() { return 9; },
        peg$c77 = "huit",
        peg$c78 = { type: "literal", value: "huit", description: "\"huit\"" },
        peg$c79 = function() { return 8; },
        peg$c80 = "sept",
        peg$c81 = { type: "literal", value: "sept", description: "\"sept\"" },
        peg$c82 = function() { return 7; },
        peg$c83 = "six",
        peg$c84 = { type: "literal", value: "six", description: "\"six\"" },
        peg$c85 = function() { return 6; },
        peg$c86 = "cinq",
        peg$c87 = { type: "literal", value: "cinq", description: "\"cinq\"" },
        peg$c88 = "quatre",
        peg$c89 = { type: "literal", value: "quatre", description: "\"quatre\"" },
        peg$c90 = "trois",
        peg$c91 = { type: "literal", value: "trois", description: "\"trois\"" },
        peg$c92 = "deux",
        peg$c93 = { type: "literal", value: "deux", description: "\"deux\"" },
        peg$c94 = "un",
        peg$c95 = { type: "literal", value: "un", description: "\"un\"" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos, preResult) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " или "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "окончание ввода";

        var word = input.split(' '),
          y = 0,
          t = 0;
        for (var z=0; z<=word.length-1; z++) {
          if (y+=word[z].length >= peg$cachedPos+word.length-1) {
                t = z;
          }
        }

        if (peg$cachedPos === 0) {
            return 'Ошибка в слове: ' + word[0] + '.'
        }

        // return 'Ошибка в слове: ' + word[t] + '.'

        return "Ожидается " + expectedDesc + ", но написано " + foundDesc + " в позиции " + peg$currPos +'. ' + (typeof preResult === 'number' ? ' Найденное совпадение - ' + preResult : '');
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found, preResult),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column,
        preResult
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parseThreeDigitNumber();

      return s0;
    }

    function peg$parseThreeDigitNumber() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseFPZD();
      if (s1 === peg$FAILED) {
        s1 = peg$parseSPZD();
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (input.charCodeAt(peg$currPos) === 32) {
          s3 = peg$c2;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c3); }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (input.charCodeAt(peg$currPos) === 32) {
              s3 = peg$c2;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c3); }
            }
          }
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 5) === peg$c4) {
            s3 = peg$c4;
            peg$currPos += 5;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c5); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseNumbersToHundred();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c6(s1, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseFPZD();
        if (s1 === peg$FAILED) {
          s1 = peg$parseSPZD();
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          if (input.charCodeAt(peg$currPos) === 32) {
            s3 = peg$c2;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c3); }
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              if (input.charCodeAt(peg$currPos) === 32) {
                s3 = peg$c2;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c3); }
              }
            }
          } else {
            s2 = peg$c0;
          }
          if (s2 !== peg$FAILED) {
            if (input.substr(peg$currPos, 5) === peg$c7) {
              s3 = peg$c7;
              peg$currPos += 5;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseNumbersToTwenty();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c6(s1, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseFPZD();
          if (s1 === peg$FAILED) {
            s1 = peg$parseSPZD();
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            if (input.charCodeAt(peg$currPos) === 32) {
              s3 = peg$c2;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c3); }
            }
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                if (input.charCodeAt(peg$currPos) === 32) {
                  s3 = peg$c2;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c3); }
                }
              }
            } else {
              s2 = peg$c0;
            }
            if (s2 !== peg$FAILED) {
              if (input.substr(peg$currPos, 5) === peg$c9) {
                s3 = peg$c9;
                peg$currPos += 5;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c10); }
              }
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c11(s1);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 5) === peg$c4) {
              s1 = peg$c4;
              peg$currPos += 5;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c5); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parseNumbersToHundred();
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c12(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 5) === peg$c7) {
                s1 = peg$c7;
                peg$currPos += 5;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c8); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseNumbersToTwenty();
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c12(s2);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 4) === peg$c13) {
                  s1 = peg$c13;
                  peg$currPos += 4;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c14); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c15();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$parseNumbersToHundred();
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 4) === peg$c16) {
                      s1 = peg$c16;
                      peg$currPos += 4;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c17); }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c18();
                    }
                    s0 = s1;
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseNumbersToHundred() {
      var s0;

      s0 = peg$parseNumbersFromSixtyToHundred();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNumbersToSixty();
      }

      return s0;
    }

    function peg$parseNumbersFromSixtyToHundred() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c21;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSPFD();
          if (s3 === peg$FAILED) {
            s3 = peg$parseCO();
            if (s3 === peg$FAILED) {
              s3 = peg$parseFPZD();
              if (s3 === peg$FAILED) {
                s3 = peg$parseSPZD();
                if (s3 === peg$FAILED) {
                  s3 = peg$parseFMFD();
                  if (s3 === peg$FAILED) {
                    s3 = peg$parseFPFD();
                  }
                }
              }
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c23(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 8) === peg$c19) {
          s1 = peg$c19;
          peg$currPos += 8;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c24) {
            s2 = peg$c24;
            peg$currPos += 4;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c25); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseSMFD();
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c26();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 8) === peg$c19) {
            s1 = peg$c19;
            peg$currPos += 8;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c27();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 13) === peg$c28) {
              s1 = peg$c28;
              peg$currPos += 13;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c29); }
            }
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 45) {
                s2 = peg$c21;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c22); }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$parseCO();
                if (s3 === peg$FAILED) {
                  s3 = peg$parseFPZD();
                  if (s3 === peg$FAILED) {
                    s3 = peg$parseSPZD();
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c30(s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 13) === peg$c28) {
                s1 = peg$c28;
                peg$currPos += 13;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c29); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c31();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 12) === peg$c32) {
                  s1 = peg$c32;
                  peg$currPos += 12;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c33); }
                }
                if (s1 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 45) {
                    s2 = peg$c21;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseSPFD();
                    if (s3 === peg$FAILED) {
                      s3 = peg$parseFMFD();
                      if (s3 === peg$FAILED) {
                        s3 = peg$parseSMFD();
                        if (s3 === peg$FAILED) {
                          s3 = peg$parseFPFD();
                        }
                      }
                    }
                    if (s3 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c30(s3);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 12) === peg$c32) {
                    s1 = peg$c32;
                    peg$currPos += 12;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c33); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c34();
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseNumbersToSixty() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseFPSD();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c21;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCO();
          if (s3 === peg$FAILED) {
            s3 = peg$parseFPZD();
            if (s3 === peg$FAILED) {
              s3 = peg$parseSPZD();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c35(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseFPSD();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c36(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$parseNumbersToTwenty();
        }
      }

      return s0;
    }

    function peg$parseFPSD() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c37) {
        s1 = peg$c37;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c39();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 8) === peg$c40) {
          s1 = peg$c40;
          peg$currPos += 8;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c42();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 6) === peg$c43) {
            s1 = peg$c43;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c45();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 5) === peg$c46) {
              s1 = peg$c46;
              peg$currPos += 5;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c47); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c48();
            }
            s0 = s1;
          }
        }
      }

      return s0;
    }

    function peg$parseCO() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c49) {
        s1 = peg$c49;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c50); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSO();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c51();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseNumbersToTwenty() {
      var s0;

      s0 = peg$parseSPFD();
      if (s0 === peg$FAILED) {
        s0 = peg$parseFPFD();
        if (s0 === peg$FAILED) {
          s0 = peg$parseSMFD();
          if (s0 === peg$FAILED) {
            s0 = peg$parseFMFD();
            if (s0 === peg$FAILED) {
              s0 = peg$parseSPZD();
              if (s0 === peg$FAILED) {
                s0 = peg$parseFPZD();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseSO();
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseSPFD() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseFMFD();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c21;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSPZD();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c52(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseFPFD() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c53) {
        s1 = peg$c53;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c54); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c55();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c56) {
          s1 = peg$c56;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c58();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 8) === peg$c59) {
            s1 = peg$c59;
            peg$currPos += 8;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c60); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c61();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 6) === peg$c62) {
              s1 = peg$c62;
              peg$currPos += 6;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c63); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c64();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 5) === peg$c65) {
                s1 = peg$c65;
                peg$currPos += 5;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c66); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c67();
              }
              s0 = s1;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseSMFD() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c68) {
        s1 = peg$c68;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c69); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c70();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseFMFD() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c71) {
        s1 = peg$c71;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c72); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c73();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseSPZD() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c74) {
        s1 = peg$c74;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c75); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c76();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c77) {
          s1 = peg$c77;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c78); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c79();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 4) === peg$c80) {
            s1 = peg$c80;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c81); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c82();
          }
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseFPZD() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c83) {
        s1 = peg$c83;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c84); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c85();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c86) {
          s1 = peg$c86;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c87); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c39();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 6) === peg$c88) {
            s1 = peg$c88;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c89); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c42();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 5) === peg$c90) {
              s1 = peg$c90;
              peg$currPos += 5;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c91); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c45();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 4) === peg$c92) {
                s1 = peg$c92;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c93); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c48();
              }
              s0 = s1;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseSO() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c94) {
        s1 = peg$c94;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c95); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c51();
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "окончание ввода" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos, peg$result);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();