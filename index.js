/**
 * for parallel email sending
 * @type {{detect?, times?, mapSeries?, filter?, mapValuesSeries?, setImmediate?, filterLimit?, someSeries?, eachOfLimit?, timeout?, during?, map?, groupByLimit?, doDuring?, race?, reflectAll?, reduceRight?, forEachOfLimit?, concatLimit?, allLimit?, retry?, rejectLimit?, nextTick?: function(*, ...[*]): *, log?: function(*=, ...[*]): *, tryEach?, everySeries?, selectSeries?, flatMapLimit?, allSeries?, mapValuesLimit?, forever?, seq?, forEach?, retryable?, anySeries?, applyEachSeries?: function(*=, ...[*]=): *, reduce?, eachSeries?, eachOfSeries?, sortBy?, reject?, timesSeries?, parallel?, forEachOf?, waterfall?, detectSeries?, queue?, findLimit?, autoInject?, cargo?, each?: function(...[*]=): (*), eachLimit?, rejectSeries?, groupBy?, priorityQueue?, series?, select?, doUntil?, findSeries?, constant?, foldl?, memoize?, reflect?, foldr?, someLimit?, filterSeries?, inject?, asyncify?, any?, find?, eachOf?, wrapSync?, selectLimit?, until?, whilst?, concatSeries?, detectLimit?, parallelLimit?, timesLimit?, compose?, everyLimit?, auto?, dir?: function(*=, ...[*]): *, forEachLimit?, cargoQueue?, forEachSeries?, flatMapSeries?, some?, forEachOfSeries?, ensureAsync?, unmemoize?, mapValues?, every?, apply?, groupBySeries?, mapLimit?, all?, flatMap?, transform?, applyEach?, concat?, anyLimit?, doWhilst?, readonly default?: {retryable: function((Object|number)=, AsyncFunction): AsyncFunction, select: function(...[*]=): (*), rejectLimit: function(...[*]=): (*), someLimit: function(...[*]=): (*), eachLimit: function(...[*]=): (*), during: function(...[*]=): (*), groupByLimit: function(...[*]=): (*), allSeries: function(...[*]=): (*), wrapSync: wrapSync|(function(Function): AsyncFunction), findLimit: function(...[*]=): (*), mapValuesLimit: function(...[*]=): (*), reflect: function(AsyncFunction): function(...[*]=): *, sortBy: function(...[*]=): (*), cargo: function(AsyncFunction, number=): module:ControlFlow.QueueObject, reduce: function(...[*]=): (*), mapLimit: function(...[*]=): (*), concat: function(...[*]=): (*), reflectAll: function((Array|Object|Iterable)): Array, each: function(...[*]=): (*), eachSeries: function(...[*]=): (*), compose: function(...[*]): function(...[*]=): *, anyLimit: function(...[*]=): (*), forEachLimit: function(...[*]=): (*), foldr: foldr|(function(Array, *, AsyncFunction, Function=): Promise), selectSeries: function(...[*]=): (*), log: function(*=, ...[*]): *, concatSeries: function(...[*]=): (*), groupBy: function((Array|Iterable|AsyncIterable|Object), AsyncFunction, Function=): Promise, someSeries: function(...[*]=): (*), detectSeries: function(...[*]=): (*), memoize: function(AsyncFunction, Function=): AsyncFunction, forEachSeries: function(...[*]=): (*), forEachOf: function(...[*]=): (*), concatLimit: function(...[*]=): (*), waterfall: function(...[*]=): (*), filterSeries: function(...[*]=): (*), parallelLimit: function((Array|Iterable|AsyncIterable|Object), number, Function=): Promise, foldl: function(...[*]=): (*), detectLimit: function(...[*]=): (*), map: function(...[*]=): (*), seq: function(...[AsyncFunction]): function(...[*]=): *, mapSeries: function(...[*]=): (*), eachOf: function(...[*]=): (*), flatMapSeries: function(...[*]=): (*), anySeries: function(...[*]=): (*), filter: function(...[*]=): (*), asyncify: wrapSync|(function(Function): AsyncFunction), series: function((Array|Iterable|AsyncIterable|Object), Function=): Promise, forEachOfLimit: function(...[*]=): (*), rejectSeries: function(...[*]=): (*), queue: function(AsyncFunction, number=): module:ControlFlow.QueueObject, auto: function(Object, number=, Function=): Promise, constant: function(...[*]): AsyncFunction, allLimit: function(...[*]=): (*), groupBySeries: function((Array|Iterable|AsyncIterable|Object), AsyncFunction, Function=): Promise, dir: function(*=, ...[*]): *, find: function(...[*]=): (*), eachOfLimit: function(...[*]=): (*), all: function(...[*]=): (*), applyEachSeries: function(*=, ...[*]=): *, doUntil: function(AsyncFunction, AsyncFunction, Function=): Promise, doWhilst: function(...[*]=): (*), setImmediate: function(*, ...[*]): *, priorityQueue: function(AsyncFunction, number): module:ControlFlow.QueueObject, flatMap: function(...[*]=): (*), unmemoize: function(AsyncFunction): AsyncFunction, timesLimit: function(number, number, AsyncFunction, Function): Promise, mapValuesSeries: function(Object, AsyncFunction, Function=): Promise, filterLimit: function(...[*]=): (*), some: function(...[*]=): (*), ensureAsync: function(AsyncFunction): AsyncFunction, detect: function(...[*]=): (*), timeout: function(AsyncFunction, number, *=): AsyncFunction, applyEach: function(*=, ...[*]=): *, timesSeries: function(number, AsyncFunction, Function): Promise, times: function(number, AsyncFunction, Function): Promise, transform: function((Array|Iterable|AsyncIterable|Object), *=, AsyncFunction, Function=): Promise, doDuring: function(...[*]=): (*), parallel: function((Array|Iterable|AsyncIterable|Object), Function=): Promise, nextTick: function(*, ...[*]): *, reject: function(...[*]=): (*), flatMapLimit: function(...[*]=): (*), selectLimit: function(...[*]=): (*), reduceRight: foldr|(function(Array, *, AsyncFunction, Function=): Promise), everyLimit: function(...[*]=): (*), every: function(...[*]=): (*), eachOfSeries: function(...[*]=): (*), retry: function(*=, *=, *=): *, everySeries: function(...[*]=): (*), race: function(...[*]=): (*), apply: function(Function, ...[*]): function(...[*]): *, forEach: function(...[*]=): (*), cargoQueue: function(AsyncFunction, number=, number=): module:ControlFlow.QueueObject, mapValues: function(Object, AsyncFunction, Function=): Promise, autoInject: function(Object, Function=): Promise, any: function(...[*]=): (*), whilst: function(...[*]=): (*), forEachOfSeries: function(...[*]=): (*), tryEach: function(...[*]=): (*), until: function(AsyncFunction, AsyncFunction, Function=): Promise, findSeries: function(...[*]=): (*), forever: function(...[*]=): (*), inject: function(...[*]=): (*)}}|{retryable, select, rejectLimit, someLimit, eachLimit, during, groupByLimit, allSeries, wrapSync, findLimit, mapValuesLimit, reflect, sortBy, cargo: (function(AsyncFunction, number=): {[p: string]: DLL|number|*|boolean, unshiftAsync(*=, *=): (undefined|*), resume(): (undefined), paused: boolean, process(): (undefined), _tasks: DLL, idle(): boolean, [Symbol.iterator](): Generator<any, void, any>, workersList(): [], length(): *, started: boolean, pushAsync(*=, *=): (undefined|*), kill(): void, push(*=, *=): (undefined|*), remove(*=): void, pause(): void, concurrency: number, running(): number, payload: *, unshift(*=, *=): (undefined|*), buffer: number}), reduce, mapLimit, concat: awaitable, reflectAll, each, eachSeries, compose: (function(...[*]): function(...[*]=): *), anyLimit, forEachLimit, foldr, selectSeries, log, concatSeries: awaitable, groupBy, someSeries, detectSeries, memoize, forEachSeries, forEachOf, concatLimit: awaitable, waterfall, filterSeries, parallelLimit, foldl, detectLimit, map, seq, mapSeries, eachOf, flatMapSeries, anySeries, filter, asyncify: (wrapSync|module:Utils.asyncify), series, forEachOfLimit, rejectSeries, queue, auto: module:ControlFlow.auto, constant: (function(...[*]): function(...[*]): *), allLimit, groupBySeries, dir, find, eachOfLimit, all, applyEachSeries: (function(*=, ...[*]=): awaitable), doUntil, doWhilst, setImmediate, priorityQueue, flatMap, unmemoize, timesLimit, mapValuesSeries, filterLimit, some, ensureAsync, detect: awaitable, timeout, applyEach: (function(*=, ...[*]=): awaitable), timesSeries, times, transform, doDuring, parallel, nextTick, reject, flatMapLimit, selectLimit, reduceRight, everyLimit, every, eachOfSeries, retry, everySeries, race, apply: (function(Function, ...[*]): function(...[*]): *), forEach, cargoQueue: (function(AsyncFunction, number=, number=): {[p: string]: DLL|number|*|boolean, unshiftAsync(*=, *=): (undefined|*), resume(): (undefined), paused: boolean, process(): (undefined), _tasks: DLL, idle(): boolean, [Symbol.iterator](): Generator<any, void, any>, workersList(): [], length(): *, started: boolean, pushAsync(*=, *=): (undefined|*), kill(): void, push(*=, *=): (undefined|*), remove(*=): void, pause(): void, concurrency: number, running(): number, payload: *, unshift(*=, *=): (undefined|*), buffer: number}), mapValues, autoInject: (function(Object, Function=): Promise), any, whilst, forEachOfSeries, tryEach, until, findSeries, forever, inject}}
 */
let async = require("async");
let http = require("http");
let nodeMailer = require("nodemailer");

/**
 * a list of fake emails for testing
 * @type {string[]}
 */
let mailsList = ["jmmuller@outlook.com","pedwards@icloud.com","lushe@yahoo.ca","laird@gmail.com","pemungkah@live.com","yamla@sbcglobal.net"];

/**
 * to fill with succeeded emails
 * @type {string[]}
 */
let succeeded = [];
/**
 * to fill with failed emails
 * @type {string[]}
 */
let failed = [];

let transporter;

/**
 * Configuring the source sending e-mail
 */
function bulkMailing() {
    let self = this;
    transporter = nodeMailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'data4life.challenge@gmail.com',
            pass: 'data4life3000'
        },
        tls: {rejectUnauthorized: false},
        debug: true
    });
    /**
     * call the sending function
     */
    self.callSending();
}

/**
 * sending function impl
 */
bulkMailing.prototype.callSending = function () {
    let self = this;
    /**
     * Log the succeeded as well as failed e-mails sending
     * Call sendMail function
     */
    async.each(mailsList,self.sendMail, function () {
        console.log(`succeeded : ${succeeded} || \n failed: ${failed}`);
    });
};

/**
 * sendMail function impl
 * @param mail --> to send to
 * @param callback
 */
bulkMailing.prototype.sendMail = function (mail, callback) {
    console.log("on the way to :"+ mail);
    let self = this;
    /**
     * Execute sending in series
     */
    async.waterfall([
        function (callback) {
            let mailOptions = {
                from: 'Saif Eddin Abid',
                to: mail,
                subject: 'You are part of a bulk mailing',
                text: 'I hope you liked it'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if(error){
                    console.log(error);
                    failed.push(mail);
                }else{
                    succeeded.push(mail);
                } callback(null, self.status, mail);
            });
        },
        /**
         * sending two more times to the next two emails in the array of emails at the same time --> 3 times at once
         */
        function(){
        callback();
        }
    ], function () {
        callback();
    });
};

new bulkMailing();
