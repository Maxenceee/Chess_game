/*!






 __  __                                                  ____                             
|  \/  |   __ _  __  __   ___   _ __     ___    ___     / ___|   __ _   _ __ ___     __ _ 
| |\/| |  / _` | \ \/ /  / _ \ | '_ \   / __|  / _ \   | |  _   / _` | | '_ ` _ \   / _` |
| |  | | | (_| |  >  <  |  __/ | | | | | (__  |  __/   | |_| | | (_| | | | | | | | | (_| |
|_|  |_|  \__,_| /_/\_\  \___| |_| |_|  \___|  \___|    \____|  \__,_| |_| |_| |_|  \__,_|
    





*/
/*!
*   @license © Copyright 2022, All rights reserved.
*   @author: Maxence Gama, maxence.gama@gmail.com, @maxencegama
*/

/**!
 *
 * 
 * 
 * This program is a chess game with ai opponent with training purpose
 * 
 * 
 */

// Program based on chess.js recoded in OOP (not finish)

this.gref_ = {
    // UI elements
    CONFIG: [["app-root"], [], []],
    // Game pieces as objects
    PIECES: {
        W: {
            WRook1: {
                color: 'W',
                type: 'rook',
                position: [7, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_rlt.svg"
            },
            WRook2: {
                color: 'W',
                type: 'rook',
                position: [0, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_rlt.svg"
            },
            WKnigh1: {
                color: 'W',
                type: 'knight',
                position: [6, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_nlt.svg"
            },
            WKnigh2: {
                color: 'W',
                type: 'knight',
                position: [1, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_nlt.svg"
            },
            WBishop1: {
                color: 'W',
                type: 'bishop',
                position: [5, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_blt.svg"
            },
            WBishop2: {
                color: 'W',
                type: 'bishop',
                position: [2, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_blt.svg"
            },
            WQueen: {
                color: 'W',
                type: 'queen',
                position: [3, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_qlt.svg"
            },
            WKing : {
                color: 'W',
                type: 'king',
                position: [4, 7],
                moves: [],
                alreadyMoved: false,
                img: "Chess_klt.svg"
            },
            WPawn1: {
                color: 'W',
                type: 'pawn',
                position: [0, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            },
            WPawn2: {
                color: 'W',
                type: 'pawn',
                position: [1, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            },
            WPawn3: {
                color: 'W',
                type: 'pawn',
                position: [2, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            },
            WPawn4: {
                color: 'W',
                type: 'pawn',
                position: [3, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            },
            WPawn5: {
                color: 'W',
                type: 'pawn',
                position: [4, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            },
            WPawn6: {
                color: 'W',
                type: 'pawn',
                position: [5, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            },
            WPawn7: {
                color: 'W',
                type: 'pawn',
                position: [6, 6],
                moves: [],
                alreadyMoved: false,
                jump: 'never',
                img: "Chess_plt.svg"
            },
            WPawn8: {
                color: 'W',
                type: 'pawn',
                position: [7, 6],
                moves: [],
                alreadyMoved: false,
                img: "Chess_plt.svg"
            }
        },
        B: {
            BRook1: {
                color: 'B',
                type: 'rook',
                position: [0, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_rdt.svg"
            },
            BRook2: {
                color: 'B',
                type: 'rook',
                position: [7, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_rdt.svg"
            },
            BKnigh1: {
                color: 'B',
                type: 'knight',
                position: [1, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_ndt.svg"
            },
            BKnigh2: {
                color: 'B',
                type: 'knight',
                position: [6, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_ndt.svg"
            },
            BBishop1: {
                color: 'B',
                type: 'bishop',
                position: [2, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_bdt.svg"
            },
            BBishop2: {
                color: 'B',
                type: 'bishop',
                position: [5, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_bdt.svg"
            },
            BQueen: {
                color: 'B',
                type: 'queen',
                position: [3, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_qdt.svg"
            },
            BKing : {
                color: 'B',
                type: 'king',
                position: [4, 0],
                moves: [],
                alreadyMoved: false,
                img: "Chess_kdt.svg"
            },
            BPawn1: {
                color: 'B',
                type: 'pawn',
                position: [0, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            },
            BPawn2: {
                color: 'B',
                type: 'pawn',
                position: [1, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            },
            BPawn3: {
                color: 'B',
                type: 'pawn',
                position: [2, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            },
            BPawn4: {
                color: 'B',
                type: 'pawn',
                position: [3, 1],
                moves: [],
                alreadyMoved: false,
                jump: 'never',
                img: "Chess_pdt.svg"
            },
            BPawn5: {
                color: 'B',
                type: 'pawn',
                position: [4, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            },
            BPawn6: {
                color: 'B',
                type: 'pawn',
                position: [5, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            },
            BPawn7: {
                color: 'B',
                type: 'pawn',
                position: [6, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            },
            BPawn8: {
                color: 'B',
                type: 'pawn',
                position: [7, 1],
                moves: [],
                alreadyMoved: false,
                img: "Chess_pdt.svg"
            }
        }
    },
    MOVES: {}
}

this.gref_ = this.gref_ || {};
(function(_) {
    try {
        "use strict";
        var Kr, Kd, Km;
        var PW, PB;
        // Parsing UI as var
        _ && _.CONFIG ? (Kd = _.CONFIG[0], Kr = _.CONFIG[1], Km = _.CONFIG[2]) || {} : (Kr = [], Kd = [], Km = []);
        _ && _.PIECES ? (PW = _.PIECES.W, PB = _.PIECES.B) : (PW = {}, PB = {});
        console.log(_, Kd, Kr, Km, PW, PB);

        // Return document element by id
        _.getElemID = (a) => {
            return document.getElementById(a);
        };
        
        // Return document element by class
        _.getElemCl = (a) => {
            return document.getElementsByClassName(a)[0];
        };

        // Create document element with custom attributes
        _.creatElem = ({type="div", attr="class", naAttr}={}) => {
            let e = document.createElement(type);

            (naAttr && typeof attr !== "object") && e.setAttribute(attr, naAttr);
            typeof attr === "object" && _.defAttr(e, attr);

            return e
        };

        // Define several attributes on element
        _.defAttr = (a, b) => {
            (a && b) && Object.keys(b).forEach(attr => {
                a.setAttribute(attr, b[attr]);
            });
            return a
        };

        // Return cell element by coords
        _.getCell = (x, y) => {
            let fy = document.querySelectorAll('[celly="'+y+'"]');
            return Array.prototype.filter.call(fy, function( node ) {
                return node.getAttribute("cellx") == x;
            })[0];
        };

        // Return cell element coords
        _.getCellCoord = (a) => {
            return {x: parseInt(a.getAttribute("cellx")), y: parseInt(a.getAttribute("celly"))}
        };

        // Return background table cell color
        _.lps = (a, b) => {
            return ((a+b) % 2 == 0 ? "cell_1" : "cell_2") + " chess-cell"
        };

        // Define cell element background image
        _.defChessImage = (a, b) => {
            a.querySelector('.cell-content').style.backgroundImage = 'url(/images/'+b+')';
            a.classList.add("-chess-image");
            a.setAttribute("ispiece", true);
        };
        
        // Remove cell element background image
        _.remChessImage = (a) => {
            a.querySelector('.cell-content').style.backgroundImage = "";
            a.classList.remove("-chess-image");
            a.setAttribute("ispiece", false);
        };

        // Check if two cells are the same
        _.isSameCell = (a, b) => {
            return (a.x === b.x && a.y === b.y)
        };

        // Check if a cell is empty
        _.isEmpty = (a) => {
            return (this.piecesBoard[a.x][a.y] === 0)
        };

        // Check if cell can be eat
        _.isEating = (a, b) => {
            return (this.piecesBoard[a.x][a.y].color !== this.piecesBoard[b.x][b.y].color) && this.piecesBoard[b.x][b.y].type !== "king"
        };

        // Check if presented piece is one of playing player
        _.getPlayerTurn = (a) => {
            return (typeof this.piecesBoard[a.x][a.y] === "object" ? ((this.piecesBoard[a.x][a.y].color === 'W' && this.isWTurn) || (this.piecesBoard[a.x][a.y].color === 'B' && !this.isWTurn)) : false)
        };

        // Check if a king can eat a cell without endangering himself
        _.eatingWhenKing = (a, b, c) => {
            // console.log("eatingWhenKing", a, b, c);
            
            let l = _.getAllAroundPieces(b);

            l.pos = _.sortNearbyPos(l.pos, b, this.piecesBoard[a.x][a.y].color);

            // console.log(l);

            return (!_.isSameCell(a, b) && c === 'king' && _.canKingEatCell(a, b) && l.pos.length <= 0)
        };

        // Check if a king can eat a cell
        _.canKingEatCell = (a, b) => {
            return _.kingMove(a, b, true) && this.piecesBoard[a.x][a.y].color !== this.piecesBoard[b.x][b.y].color && !_.isEmpty(b)
        };

        // Check if a king as eatable cells around
        _.canKingEatAround = (b) => {
            let a;
            this.piecesBoard.forEach((e, i) => {
                e.forEach((u, v) => {
                    (typeof u === "object" && u.type === 'king' && u.color == b) && (a = {x: i, y: v});
                });
            });

            let pos = [[a.x, a.y+1], [a.x+1, a.y+1], [a.x+1, a.y], [a.x+1, a.y-1], [a.x, a.y-1], [a.x-1, a.y-1], [a.x-1, a.y], [a.x-1, a.y+1]],
                r = [];

            pos.forEach(t => {
                // console.log(t);
                if (t[0] >= 0 && t[0] < 8 && t[1] >= 0 && t[1] < 8) {
                    let c = _.canKingEatCell(a, {x: t[0], y: t[1]});
                    // console.log(c);
                    if (c) r.push(t);
                }
            });

            return r.length > 0
        };

        // Return if pawn piece can move to presented cell
        _.pawnMove = (a, b, c) => {
            let d = (c && 1) || -1,
                pos = [];
            (this.piecesBoard[a.x][a.y].alreadyMoved == false && this.piecesBoard[a.x][a.y].type == "pawn") && pos.push([a.x, a.y+(c ? 2 : -2)]);

            // console.log(this.piecesBoard[a.x][a.y], pos);

            (a.y+d >= 0 && a.y+d < 8) && (this.piecesBoard[a.x][a.y+d] == 0 && pos.push([a.x, a.y+d]));

            (a.y+d >= 0 && a.y+d < 8 && a.x+d >= 0 && a.x+d < 8) && (this.piecesBoard[a.x+d][a.y+d] != 0 && pos.push([a.x+d, a.y+d]));

            (a.y+d >= 0 && a.y+d < 8 && a.x-d >= 0 && a.x-d < 8) && (this.piecesBoard[a.x-d][a.y+d] != 0 && pos.push([a.x-d, a.y+d]));

            // console.log("pawn", pos, this.piecesBoard[a.x][a.y].alreadyMoved);

            pos = pos.filter(elm => {return elm[0] == b.x && elm[1] == b.y});

            return pos.length > 0
        };

        // Return if knight piece can move to presented cell
        _.knightMove = (a, b) => {
            let pos = [[a.x-1, a.y-2], [a.x+1, a.y-2], [a.x-1, a.y+2], [a.x+1, a.y+2], [a.x-2, a.y-1], [a.x-2, a.y+1], [a.x+2, a.y+1], [a.x+2, a.y-1]];

            pos = pos.filter(elm => {return elm[0] == b.x && elm[1] == b.y});

            // console.log(pos);

            return pos.length > 0
        };

        // Return if bichop piece can move to presented cell
        _.bichopMove = (a, b) => {
            let pos = [],
                i = 1,
                p,q,r,s;

            while (true) {
                if (a.x-i >= 0 && a.x-i < 8 && a.y-i >= 0 && a.y-i < 8) {
                    if (!p) pos.push([a.x-i, a.y-i]);
                    this.piecesBoard[a.x-i][a.y-i] != 0 && (p = true)
                }
                if (a.x+i >= 0 && a.x+i < 8 && a.y+i >= 0 && a.y+i < 8) {
                    if (!q) pos.push([a.x+i, a.y+i]);
                    this.piecesBoard[a.x+i][a.y+i] != 0 && (q = true)
                }
                if (a.x+i >= 0 && a.x+i < 8 && a.y-i >= 0 && a.y-i < 8) {
                    if (!r) pos.push([a.x+i, a.y-i]);
                    this.piecesBoard[a.x+i][a.y-i] != 0 && (r = true)
                }
                if (a.x-i >= 0 && a.x-i < 8 && a.y+i >= 0 && a.y+i < 8) {
                    if (!s) pos.push([a.x-i, a.y+i]);
                    this.piecesBoard[a.x-i][a.y+i] != 0 && (s = true)
                }
                i++;
                if (i >= 8) break
            }
            pos = pos.filter(elm => {return elm[0] == b.x && elm[1] == b.y});

            return pos.length > 0
        };

        // Return if rook piece can move to presented cell
        _.rookMove = (a, b) => {
            let pos = [],
                i = 1,
                p,q,r,s;

            while (true) {
                if (a.x-i >= 0 && a.x-i < 8) {
                    if (!p) pos.push([a.x-i, a.y]);
                    this.piecesBoard[a.x-i][a.y] != 0 && (p = true)
                }
                if (a.y-i >= 0 && a.y-i < 8) {
                    if (!q) pos.push([a.x, a.y-i]);
                    this.piecesBoard[a.x][a.y-i] != 0 && (q = true)
                }
                if (a.x+i >= 0 && a.x+i < 8) {
                    if (!r) pos.push([a.x+i, a.y]);
                    this.piecesBoard[a.x+i][a.y] != 0 && (r = true)
                }
                if (a.y+i >= 0 && a.y+i < 8) {
                    if (!s) pos.push([a.x, a.y+i]);
                    this.piecesBoard[a.x][a.y+i] != 0 && (s = true)
                }
                i++;
                if (i >= 8) break
            }
            pos = pos.filter(elm => {return elm[0] == b.x && elm[1] == b.y});

            return pos.length > 0
        };

        // Return if queen piece can move to presented cell
        _.queenMove = (a, b) => {
            return _.rookMove(a, b) || _.bichopMove(a, b)
        };

        // Return if king piece can move to presented cell
        _.kingMove = (a, b, c) => {
            let pos = [[a.x, a.y+1], [a.x+1, a.y+1], [a.x+1, a.y], [a.x+1, a.y-1], [a.x, a.y-1], [a.x-1, a.y-1], [a.x-1, a.y], [a.x-1, a.y+1]];

            if (!c) pos = _.checkKingMovement(this.piecesBoard[a.x][a.y].color).empty;
            // posF.forEach(t => {
            //     typeof this.piecesBoard[t[0]][t[1]] === "object" && pos.push(t)
            // });

            // console.log("king pos", pos);

            pos = pos.filter(elm => {return elm[0] == b.x && elm[1] == b.y});

            return pos.length > 0
        };

        // Return if presented piece can move depending on its type
        _.isForForbidenMoves = (a, b, c, d, e) => {
            // console.log(a, b, c, d, e);
            switch (c) {
                case "pawn": return _.pawnMove(a, b, d);
                case "knight": return _.knightMove(a, b);
                case "bishop": return _.bichopMove(a, b);
                case "rook": return _.rookMove(a, b);
                case "queen": return _.queenMove(a, b);
                case "king": return _.kingMove(a, b, e);
                default: return false;
            }
        };

        // Return all available movement for a king
        _.checkKingMovement = (a) => {
            let r = [0, 0];
            this.piecesBoard.forEach((e, i) => {
                e.forEach((u, v) => {
                    (typeof u === "object" && u.type === 'king' && u.color == a) && (r = [i, v]);
                });
            });

            // [].forEach.call(document.querySelectorAll(".-temp-color"), function(el) {
            //     el.classList.remove("-temp-color");
            // });
            // [].forEach.call(document.querySelectorAll(".-temp-g"), function(el) {
            //     el.classList.remove("-temp-g");
            // });

            // console.log("r", r, a);

            let l = _.getAllAroundPieces({x: r[0], y: r[1]});

            // console.log(l);

            l.pos = _.sortNearbyPos(l.pos, {x: r[0], y: r[1]}, this.piecesBoard[r[0]][r[1]].color);

            // console.log("l1", l.empty);
            // l.pos.forEach(t => s.push(t));

            l.empty = _.sortEmptyPos(l.empty, {x: r[0], y: r[1]}, this.piecesBoard[r[0]][r[1]].color);

            // console.log("l2", l.empty);

            // l.empty.forEach(t => p.push(t));

            // l.pos.forEach(e => {
            //     _.getCell(e[0], e[1]) && _.getCell(e[0], e[1]).classList.add("-temp-color");
            // });
            // l.empty.forEach(e => {
            //     _.getCell(e[0], e[1]) && _.getCell(e[0], e[1]).classList.add("-temp-g");
            // });

            // console.log("king", );
            return {chec: l.pos, empty: l.empty}
        };

        // Sort nearby pieces list depending on if it's endangering a king or not
        _.sortNearbyPos = (a, b, c) => {
            // console.log("sort nearby", a, b, c);
            
            let u = [];
            a.forEach(e => {
                let col = this.piecesBoard[e[0]][e[1]].color,
                pieceType = this.piecesBoard[e[0]][e[1]].type,
                typrev = (pieceType === 'pawn' && col === 'W') ? true : false;
                // console.log(col, typrev, col != c, _.isForForbidenMoves(b, {x: e[0], y: e[1]}, this.piecesBoard[e[0]][e[1]].type, typrev));
                // console.log(e, this.piecesBoard[e[0]][e[1]], c, _.isForForbidenMoves(b, {x: e[0], y: e[1]}, this.piecesBoard[e[0]][e[1]].type, typrev));
                if ((col != c) && _.isForForbidenMoves(b, {x: e[0], y: e[1]}, this.piecesBoard[e[0]][e[1]].type, typrev, pieceType == 'king')) u.push(e);
            });
            
            return u
        };
        
        // Sort nearby empty cells list depending on if cell is endangered by opponent pieces or not 
        _.sortEmptyPos = (a, b, c) => {
            // console.log("sort empty");
            // console.log(a, b, c);
            let u = [];

            a.forEach(e => {
                // console.log(e);
                let l = _.getAllAroundPieces({x: e[0], y: e[1]});
                // console.log(_.getAllAroundPieces({x: e[0], y: e[1]}), l);

                l.pos = _.sortNearbyPos(l.pos, {x: e[0], y: e[1]}, c);
                
                // console.log("l", e, l);
                l.pos.length && u.push(e);
            });

            // console.log(a, u);
            
            a = a.filter(item => !u.includes(item));

            // console.log("final", a);

            return a
        };

        // Return all pieces around another
        _.getAllAroundPieces = (a) => {
            let pos = [],
                emptypos = [],
                np = [[a.x-1, a.y-2], [a.x+1, a.y-2], [a.x-1, a.y+2], [a.x+1, a.y+2], [a.x-2, a.y-1], [a.x-2, a.y+1], [a.x+2, a.y+1], [a.x+2, a.y-1]],
                i = 1,
                p,q,r,s,t,u,v,w;

            np.forEach((e, i) => {
                if (e[0] >= 0 && e[0] < 8 && e[1] >= 0 && e[1] < 8) {
                    // console.log("knight", e, this.piecesBoard[e[0]][e[1]]);
                    typeof this.piecesBoard[e[0]][e[1]] === "object" && pos.push(e);
                }
            });

            // console.log("knight", pos);

            while (true) {
                if (a.x-i >= 0 && a.x-i < 8 && a.y-i >= 0 && a.y-i < 8) {
                    if (this.piecesBoard[a.x-i][a.y-i] != 0 && !p) {
                        pos.push([a.x-i, a.y-i]);
                        p = true;
                    }
                    if (!p && i < 2) emptypos.push([a.x-i, a.y-i]);
                }
                if (a.x+i >= 0 && a.x+i < 8 && a.y+i >= 0 && a.y+i < 8) {
                    if (this.piecesBoard[a.x+i][a.y+i] != 0 && !q) {
                        pos.push([a.x+i, a.y+i]);
                        q = true;
                    }
                    if (!q && i < 2) emptypos.push([a.x+i, a.y+i]);
                }
                if (a.x+i >= 0 && a.x+i < 8 && a.y-i >= 0 && a.y-i < 8) {
                    if (this.piecesBoard[a.x+i][a.y-i] != 0 && !r) {
                        pos.push([a.x+i, a.y-i]);
                        r = true;
                    }
                    if (!r && i < 2) emptypos.push([a.x+i, a.y-i]);
                }
                if (a.x-i >= 0 && a.x-i < 8 && a.y+i >= 0 && a.y+i < 8) {
                    if (this.piecesBoard[a.x-i][a.y+i] != 0 && !s) {
                        pos.push([a.x-i, a.y+i]);
                        s = true;
                    }
                    if (!s && i < 2) emptypos.push([a.x-i, a.y+i]);
                }
                if (a.x-i >= 0 && a.x-i < 8) {
                    if (this.piecesBoard[a.x-i][a.y] != 0 && !t) {
                        pos.push([a.x-i, a.y]);
                        t = true;
                    }
                    if (!t && i < 2) emptypos.push([a.x-i, a.y]);
                }
                if (a.y-i >= 0 && a.y-i < 8) {
                    if (this.piecesBoard[a.x][a.y-i] != 0 && !u) {
                        pos.push([a.x, a.y-i]);
                        u = true;
                    }
                    if (!u && i < 2) emptypos.push([a.x, a.y-i]);
                }
                if (a.x+i >= 0 && a.x+i < 8) {
                    if (this.piecesBoard[a.x+i][a.y] != 0 && !v) {
                        pos.push([a.x+i, a.y]);
                        v = true;
                    }
                    if (!v && i < 2) emptypos.push([a.x+i, a.y]);
                }
                if (a.y+i >= 0 && a.y+i < 8) {
                    if (this.piecesBoard[a.x][a.y+i] != 0 && !w) {
                        pos.push([a.x, a.y+i]);
                        w = true;
                    }
                    if (!w && i < 2) emptypos.push([a.x, a.y+i]);
                }
                i++;
                if (i >= 8) break
            }

            return {pos: pos, empty: emptypos}
        };

        // Check if one piece move can protect its king
        _.canMoveToProtectKing = (a, b, c) => {
            let o = this.piecesBoard[a.x][a.y],
                n = this.piecesBoard[b.x][b.y];
            // console.log(o, n);
            
            this.piecesBoard[b.x][b.y] = this.piecesBoard[a.x][a.y];
            this.piecesBoard[a.x][a.y] = 0;
            // console.log(this.piecesBoard, o, n);
            if (_.checkKingMovement(c).chec <= 0) {
                this.piecesBoard[a.x][a.y] = o;
                this.piecesBoard[b.x][b.y] = n;
                return true
            } else {
                this.piecesBoard[a.x][a.y] = o;
                this.piecesBoard[b.x][b.y] = n;
                return false
            }
        };

        // Check if moving a piece is endangering its king
        _.doesMoveEndangerKing = (a, b, c) => {
            return !_.canMoveToProtectKing(a, b, c);
        };

        // Check if a king can do a castling with its rook
        _.canKingCastling = (a) => {
            let curcoord = _.getCellCoord(a),
            pc = this.piecesBoard[curcoord.x][curcoord.y],
            type = pc.type;

            if (pc.alreadyMoved) return false

            let pos = [],
                i = 1,
                p,q,r,s;

            while (true) {
                if (curcoord.x-i >= 0 && curcoord.x-i < 8) {
                    if (!p) pos.push([curcoord.x-i, curcoord.y]);
                    this.piecesBoard[curcoord.x-i][curcoord.y] != 0 && (p = true)
                }
                if (curcoord.x+i >= 0 && curcoord.x+i < 8) {
                    if (!r) pos.push([curcoord.x+i, curcoord.y]);
                    this.piecesBoard[curcoord.x+i][curcoord.y] != 0 && (r = true)
                }
                i++;
                if (i >= 8) break
            }

            pos = pos.filter(elm => {return typeof this.piecesBoard[elm[0]][elm[1]] === "object" && this.piecesBoard[elm[0]][elm[1]].type === "rook" });

            return (type == "king" && !pc.alreadyMoved && pos.length > 0)
        };

        // Do castling
        _.makeCastling = (a, b) => {
            let an,
                bn;

            if (a.x > b.x) {
                console.log("big");
                an = a.x-2;
                bn = b.x+3;
            } else {
                console.log("little");
                an = a.x+2;
                bn = b.x-2;
            }

            if (_.doesMoveEndangerKing(a, {x: an, y: a.y}, this.piecesBoard[a.x][a.y].color)) return
            this.piecesBoard[an][a.y] = this.piecesBoard[a.x][a.y];
            _.defChessImage(_.getCell(an, a.y), this.piecesBoard[a.x][a.y].img);
            _.remChessImage(_.getCell(a.x, a.y));
            this.piecesBoard[an][a.y].alreadyMoved = true;
            this.piecesBoard[bn][b.y] = this.piecesBoard[b.x][b.y];
            _.defChessImage(_.getCell(bn, b.y), this.piecesBoard[b.x][b.y].img);
            _.remChessImage(_.getCell(b.x, b.y));
            this.piecesBoard[bn][b.y].alreadyMoved = true;

            this.piecesBoard[a.x][a.y] = 0;
            this.piecesBoard[b.x][b.y] = 0;

            this.isWTurn = !this.isWTurn;
            _.showPlayerTurn();
        };

        // Return number a pieces of a player left on the board 
        _.getColorPiecesNumber = (a) => {
            let count = 0;
            this.piecesBoard.forEach((e, i) => {
                e.forEach((u, v) => {
                    (typeof u === "object" && u.color == a) && (count++);
                });
            });

            return count
        };
 
        // Check if a pawn as reach opposite border and can get promise
        _.didPawnGetPromise = (a, b) => {
            if (a.y == 0 && b == 'W') {
                console.log("white promise");
                _.pawnPromisePanel('W', a);
            } else if (a.y == 7 && b == 'B') {
                console.log("black promise");
                _.pawnPromisePanel('B', a);
            }
        };

        // Place all pieces on UI table and piece board on start
        _.placePieces = (a) => {
            Object.keys(a).forEach((e, i) => {
                let cell = _.getCell(a[e].position[0], a[e].position[1]);
                _.defChessImage(cell, a[e].img);
                cell.setAttribute("ispiece", true);
                cell.classList.add("-hide");
                this.piecesBoard[a[e].position[0]][a[e].position[1]] = a[e];
            });
        };

        // Generate UI table with cells, piecee board and setup all the listeners for pieces moves
        _.tableGen = () => {
            this.table = _.creatElem({type: "table", attr: {id: "chess_table", class: "chess-table -enter"}});
            this.chessRoot.appendChild(this.table);
            let idx = 0;

            for(var i = 0, le; i < 8; i++) {
                le = _.creatElem({type: "tr", attr: {id: "table_row_"+i, class: "table-row"}});
                for(var j = 0; j < 8; j++) {
                    let lc = _.creatElem({type: "td", attr: {id: "cell_"+j+"_"+i, class: _.lps(i, j), cellx: j, celly: i, ispiece: false, cellIndex: idx}});
                    lc.appendChild(_.creatElem({attr: {class: "cell-content", draggable: true}}));
                    // lc.ondragstart = _.onPieceDrag();
                    let that = this;

                    /**
                     *  Drag event
                     */

                    lc.addEventListener('dragstart', function(e) {
                        if (!_.getPlayerTurn(_.getCellCoord(lc))) return
                        that.currentSelect && that.currentSelect.classList.remove("-selected");
                        if (_.canKingCastling(lc)) {
                            that.isDoingRock = true;
                        }
                        setTimeout(() => (this.classList.add('-invisible')), 0);
                        that.selectedPiece = true;
                        that.currentSelect = lc;
                    });
                    
                    lc.addEventListener('dragend', function(e) {
                        that.selectedPiece = false;
                        that.isDoingRock && (that.isDoingRock = false);
                        setTimeout(() => (this.classList.remove('-invisible')), 0);
                    });

                    lc.addEventListener('dragover', function(e) {
                        e.preventDefault();
                    });

                    lc.addEventListener('drop', function(e) {
                        if (_.getPlayerTurn(_.getCellCoord(lc)) && that.isDoingRock && that.piecesBoard[_.getCellCoord(lc).x][_.getCellCoord(lc).y].type == "rook" && !that.piecesBoard[_.getCellCoord(lc).x][_.getCellCoord(lc).y].alreadyMoved) {
                            console.log("castling");
                            _.makeCastling(_.getCellCoord(that.currentSelect), _.getCellCoord(lc));
                        }
                        _.movePiece(this);
                    });

                    /**
                     *  Click event to select pieces
                     */

                    lc.addEventListener('click', (evt) => {
                        if (this.gamePlaying && (lc.classList.contains("-chess-image") || this.selectedPiece)) {
                            !this.selectedPiece && (this.currentSelect = lc);

                            if (this.selectedPiece && _.getPlayerTurn(_.getCellCoord(lc)) && this.currentSelect != lc && this.isDoingRock && this.piecesBoard[_.getCellCoord(lc).x][_.getCellCoord(lc).y].type == "rook" && !this.piecesBoard[_.getCellCoord(lc).x][_.getCellCoord(lc).y].alreadyMoved) {
                                console.log("rook");
                                return this.popupAlert = _.alertPopup("Do you want to do a castling", "Castling", function() {
                                    console.log('castling');
                                    this.currentSelect.classList.remove("-selected");
                                    this.selectedPiece = false;
                                    _.makeCastling(_.getCellCoord(this.currentSelect), _.getCellCoord(lc));
                                }.bind(this), "No", function() {
                                    this.currentSelect.classList.remove("-selected");
                                    this.currentSelect = lc;
                                    this.currentSelect.classList.add("-selected");
                                    this.isDoingRock = false;
                                }.bind(this));
                            }
                            if (_.canKingCastling(lc)) {
                                this.isDoingRock = true;
                            }
                                
                            if (this.selectedPiece && _.getPlayerTurn(_.getCellCoord(lc)) && this.currentSelect != lc) {
                                this.piecesBoard[_.getCellCoord(lc).x][_.getCellCoord(lc).y].type !== "king" && (this.isDoingRock = false);
                                this.currentSelect.classList.remove("-selected");
                                this.currentSelect = lc;
                                this.currentSelect.classList.add("-selected");
                            } else if ((!this.selectedPiece && _.getPlayerTurn(_.getCellCoord(lc))) || this.selectedPiece) {
                                this.currentSelect && (this.currentSelect.classList.toggle("-selected"));
                                _.movePiece(lc, evt);
                                this.selectedPiece = !this.selectedPiece;
                            }
                            console.log(this.isDoingRock);
                        }
                    });

                    le.appendChild(lc);
                    idx++;
                }
                this.table.appendChild(le);
            }

            let tableSize = Math.min(window.innerWidth, window.innerHeight)*0.95;
            this.table.style.width = this.table.style.height = tableSize+"px";

            window.onresize = () => { _.resiseTable() };

            this.piecesBoard = new Array(8).fill(0).map(() => new Array(8).fill(0));

            setTimeout(() => {
                document.body.classList.add("-show");
            }, 500);
            // console.log(this.piecesBoard);
        };

        // Resize UI table
        _.resiseTable = () => {
            let tableSize = Math.min(window.innerWidth, window.innerHeight)*0.95;
            this.table.style.width = this.table.style.height = tableSize+"px";
        };

        // Move a piece
        _.movePiece = (a, b) => {
            // console.log(this.selectedPiece, this.currentSelect);
            if (this.selectedPiece) {
                let oldCell = _.getCellCoord(this.currentSelect),
                    newCell = _.getCellCoord(a),
                    pieceType = this.piecesBoard[oldCell.x][oldCell.y].type;

                let reversed = this.piecesBoard[oldCell.x][oldCell.y].color == 'B' ? true : false

                // console.log(oldCell, newCell, pieceType);
                // console.log("iscorrect move", _.isForForbidenMoves(oldCell, newCell, pieceType, reversed));
                
                // console.log(_.checkKingMovement(this.piecesBoard[oldCell.x][oldCell.y].color));
                // console.log(_.checkKingMovement(this.piecesBoard[oldCell.x][oldCell.y].color));

                let kingM = _.checkKingMovement(this.piecesBoard[oldCell.x][oldCell.y].color);
                // console.log("moved", kingM, kingM.chec.length, kingM.empty.length);

                if (kingM.chec.length > 0 && pieceType != 'king') {
                    if (!_.canMoveToProtectKing(oldCell, newCell, this.piecesBoard[oldCell.x][oldCell.y].color)) {
                        console.info("does not protect king");
                        return
                    } else {
                        console.info("does protect king");
                    }
                }

                if (kingM.chec.length <= 0 && pieceType != 'king' && _.doesMoveEndangerKing(oldCell, newCell, this.piecesBoard[oldCell.x][oldCell.y].color)) {
                    console.info("put king in danger");
                    return
                }

                // if (kingM.chec.length) return
                // console.log("move");
                if (!_.isSameCell(oldCell, newCell) && (_.isEmpty(newCell) || _.isEating(oldCell, newCell)) && _.isForForbidenMoves(oldCell, newCell, pieceType, reversed) || _.eatingWhenKing(oldCell, newCell, pieceType)) {
                    if (typeof this.piecesBoard[newCell.x][newCell.y] === "object") {
                        this.removedPieces[this.piecesBoard[newCell.x][newCell.y].color].push(this.piecesBoard[newCell.x][newCell.y]);
                        _.updateRemovedPieceDisplay();
                        // console.log(this.removedPieces);
                    }
                    this.piecesBoard[newCell.x][newCell.y] = this.piecesBoard[oldCell.x][oldCell.y];
    
                    _.defChessImage(_.getCell(newCell.x, newCell.y), this.piecesBoard[newCell.x][newCell.y].img);
                    _.remChessImage(_.getCell(oldCell.x, oldCell.y));

                    !this.piecesBoard[newCell.x][newCell.y].alreadyMoved && (this.piecesBoard[newCell.x][newCell.y].alreadyMoved = true);
    
                    this.piecesBoard[oldCell.x][oldCell.y] = 0;
                    this.isWTurn = !this.isWTurn;

                    (pieceType == "pawn" && _.didPawnGetPromise(newCell, this.piecesBoard[newCell.x][newCell.y].color));

                    /*
                        Logs
                    */
                    _.showPlayerTurn(); // debug only to improve
                    console.log(this.piecesBoard);

                    console.info("piece moved");
                    _.ischeck();
                    _.checkForKingCheck();
                }

                // console.info(kingM.chec.length, kingM.empty.length);
            }
        };

        // Check if a king is in checkmate
        _.checkForKingCheck = () => {
            let W = _.checkKingMovement('W'),
                B = _.checkKingMovement('B'),
                eW = _.canKingEatAround('W'),
                eB = _.canKingEatAround('B');
            // console.log("W", W, "B", B);

            console.log(eW, eB);

            if ((W.empty.length <= 0 && _.getColorPiecesNumber('W') <= 1) || (B.empty.length <= 0 && _.getColorPiecesNumber('B') <= 1) || ( _.getColorPiecesNumber('W') <= 1 && _.getColorPiecesNumber('B') <= 1)) {
                console.log('draw game');
                _.endGame();
                return
            }

            if (W.chec.length > 0 && W.empty.length <= 0 && !eW) {
                console.info("check mate W");
                this.gamePlaying = false;
                _.ischeck(W.chec, "W", true);
                _.endGame('W');
            } else if (B.chec.length > 0 && B.empty.length <= 0 && !eB) {
                console.info("check mate B");
                this.gamePlaying = false;
                _.ischeck(B.chec, "B", true);
                _.endGame('B');
            } else if (W.chec.length > 0) {
                console.info("check W", W.chec);
                _.ischeck(W.chec, "W");
            } else if (B.chec.length > 0) {
                console.info("check B");
                _.ischeck(B.chec, "B");
            } else {
                console.info("continue");
                _.ischeck();
            }
        };

        // Update UI window on king checkmate
        _.ischeck = (c, a, b) => {
            if (_.getElemCl("info-window")) {
                _.getElemCl("info-window").remove();
            }
            if (a) {
                this.checkPanel = _.creatElem({naAttr: "info-window"});
                let ln = _.creatElem({type: "h1", naAttr: "info-window-t2"});
                this.checkPanel.appendChild(ln);
                ln.innerText = (a == 'W' ? "White" : "Black") + " King is in Check" + (b ? "mate" : "") + " "+(c[0][0]+1)+";"+(c[0][1]+1);
                _.getElemCl("window-c").appendChild(this.checkPanel);
            } else {
                this.checkPanel && this.checkPanel.remove();
            }
        };

        // On end game to stop game
        _.endGame = (a) => {
            this.gamePlaying = false;
            clearInterval(this.playerTimer);
            this.waitingPan && this.waitingPan.remove();
            let mess = a ? (a == 'B' ? "White" : "Black")+" player win the game!" : "It's a draw!"
            this.popupAlert = _.alertPopup(mess, "Go Home", function() {
                document.body.classList.add("-leaving");
                setTimeout(() => {
                    window.location.href = "/";
                }, 500);
            }, "Stay here");
        };

        // Place UI window of removed pieces
        _.placeRemovePrev = () => {
            _.getElemCl("w-rm-p").style = "";
            _.getElemCl("b-rm-p").style = "";
            if (this.playerColor === 'W') {
                _.getElemCl("w-rm-p").style.bottom = "50px";
                _.getElemCl("b-rm-p").style.top = "50px";
            } else {
                _.getElemCl("w-rm-p").style.top = "50px";
                _.getElemCl("b-rm-p").style.bottom = "50px";
            }
        };

        // Initialize game timer
        _.initTimer = () => {
            this.selfTimerCount = 0;
            this.otherTimerCount = 0;
            this.playerTimer = window.setInterval(() => {
                if (this.isWTurn) {
                    this.selfTimerCount++;
                } else if (!this.canPLay) {
                    this.otherTimerCount++;
                }
                this.timerPan.innerText = (Math.floor(this.selfTimerCount/60)+"'"+this.selfTimerCount%60+"\"")+":"+(Math.floor(this.otherTimerCount/60)+"'"+this.otherTimerCount%60+"\"")
                if (!this.gamePlaying) clearInterval(this.playerTimer);
            }, 1000);
        };

        // Create and show pawn promise UI panel
        _.pawnPromisePanel = (a, b) => {
            if (this.removedPieces[a]) {
                let p = _.creatElem({attr: {id: "pawn-promise-panel", class: "pawn-promise-panel"}}),
                    q = _.creatElem({naAttr: "pawn-promise-panel-c"});
    
                p.appendChild(q);
    
                let x = (a, b, c, d) => {
                    this.piecesBoard[a.x][a.y] = b
                    _.defChessImage(_.getCell(a.x, a.y), b.img);
                    console.log(d);
                    d.splice(c, 1);
                    p.remove();
                    _.updateRemovedPieceDisplay();
                    _.checkForKingCheck();
                }
    
                this.removedPieces[a].forEach((t, i) => {
                    let j = _.creatElem({attr: {class: "pawn-prom-p-c-itm", style: "--delay-itm: "+i/10+"s;", id: "pawn-prom-p-c-itm-"+i}});
                    j.style.backgroundImage = 'url(/images/'+t.img+')';
                    j.onclick = (function() {
                        x(b, t, i, this.removedPieces[a]);
                    }).bind(this)
                    q.appendChild(j);
                });
    
                setTimeout(() => {
                    q.classList.add("-show-itm");
                }, 50);
    
                document.body.appendChild(p);
            }
        };

        // Update remove pieces UI window
        _.updateRemovedPieceDisplay = () => {
            Object.keys(this.removedPieces).forEach((e, i) => {
                _.getElemCl(e === 'W' ? "w-rm-p" : "b-rm-p").innerHTML = "";
                this.removedPieces[e].forEach(u => {
                    // console.log(u);
                    let a = _.creatElem({naAttr: "removed-priece"});
                    a.style.backgroundImage = 'url(/images/'+u.img+')';
                    _.getElemCl(u.color === 'W' ? "w-rm-p" : "b-rm-p").appendChild(a);
                });
            });
        };

        // Update UI window on player turn changes
        _.showPlayerTurn = () => {
            _.getElemID("turn-window-tt").innerText = this.isWTurn ? "White's Turn" : "Black's Turn"
        };

        // Pieces appearing animation on start
        _.showPieces = () => {
            let pieces = document.getElementsByClassName('-chess-image'),
                i = 0;

            let linterval = window.setInterval(function() {
                if (i >= Object.getOwnPropertyNames(PW).length+Object.getOwnPropertyNames(PB).length) {
                    clearInterval(linterval);
                    this.gamePlaying = true;
                    _.showPlayerTurn();
                    return;
                };

                pieces[i].classList.remove("-hide");
                i++
            }, 20);
        };

        // Init the game
        _.init = () => {
            this.chessRoot = _.getElemID(Kd[0]);
            this.selectedPiece = false;
            this.isDoingRock = false;
            this.isWTurn = true;
            this.gamePlaying = false;
            this.removedPieces = {W: [], B: []};

            this.timerPan = _.getElemID("play-timer");

            _.tableGen();

            console.log(this.piecesBoard);
            setTimeout(() => {
                console.log("game start");

                _.placePieces(PW);
                _.placePieces(PB);

                _.showPieces();
                // _.initTimer();
                // _.placeRemovePrev();

                /*
                developpement message
                */
               
                setTimeout(() => {
                    _.alertPopup("This feature is not available. Local game will start.", "Leave", function() {
                        document.body.classList.add("-leaving");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 500);
                    }.bind(this), "Stay here", function() {
                        _.initTimer();
                        _.placeRemovePrev();
                    });
                }, 1000);
            }, 1500);

            _.closeGame();
        };

        // Create and show a custom alert
        _.alertPopup = (t, a, b, c, d) => {
            this.popupAlert && this.popupAlert.remove();
            let l = document.createElement('div');
            l.classList.add('ad-error-pn-c');
            document.body.appendChild(l);
            if (!b) {
                l.innerHTML = '<div class="ad-error-panel"><div class="ad-err"><p>'+t+'</p></div><div id="ad-err-close-btn" class="ad-err-close">Fermer</div></div>';
            } else {
                if (c) {
                    l.innerHTML = '<div class="ad-error-panel"><div class="ad-err"><p>'+t+'</p></div><div class="ad-btn"><div id="ad-err-reset-btn" class="ad-err-close ad-demi ad-demi-sup">'+a+'</div><div id="ad-err-close-btn" class="ad-err-close ad-demi">'+c+'</div></div></div>';
                    document.getElementById('ad-err-reset-btn').addEventListener("click", b);
                    document.getElementById('ad-err-reset-btn').addEventListener("click", function() {document.body.removeChild(l)});
                } else {
                    l.innerHTML = '<div class="ad-error-panel"><div class="ad-err"><p>'+t+'</p></div><div id="ad-err-close-btn" class="ad-err-close">'+a+'</div></div>';
                    document.getElementById('ad-err-close-btn').addEventListener("click", b);
                }
            }
            if (d) {
                document.getElementById('ad-err-close-btn').addEventListener("click", d);
            }
            document.getElementById('ad-err-close-btn').addEventListener("click", function() {document.body.removeChild(l)});
            return l
        }

        // Home button
        _.closeGame = () => {
            _.getElemID("close-btn").onclick = () => {
                this.popupAlert = _.alertPopup("You are going to leave the game.", "Leave", function() {
                    document.body.classList.add("-leaving");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 500);
                }.bind(this), "Stay here");
            }
        };

        (function(){
            window.setTimeout(_.init(), 0);
        }());
    } catch (err) {
        console.info(err);
    }
}(this.gref_));
