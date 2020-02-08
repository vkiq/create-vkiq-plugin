import { WriteStream } from 'fs';

declare class PluginLogger {
  private name: string;

  private stream: WriteStream;

  // INF: log(), inf(), info(), l(), i(), m(), msg(), message(), blue(), b()
  public log(message: string): void;

  // ERR: err(), error(), e(), fatal(), stop(), red(), r()
  public err(message: string): void;

  // OK: ok(), o(), s(), success(), ready(), green(), g()
  public ok(message: string): void;

  // Alias
  // INF
  public i(message: string): void;
  public l(message: string): void;
  public inf(message: string): void;
  public info(message: string): void;
  public m(message: string): void;
  public msg(message: string): void;
  public message(message: string): void;
  public blue(message: string): void;
  public b(message: string): void;
  // ERR
  public error(message: string): void;
  public e(message: string): void;
  public fatal(message: string): void;
  public stop(message: string): void;
  public red(message: string): void;
  public r(message: string): void;
  // OK
  public o(message: string): void;
  public s(message: string): void;
  public success(message: string): void;
  public ready(message: string): void;
  public green(message: string): void;
  public g(message: string): void;

  constructor(name: string, stream: WriteStream);
}

declare class VkiQPluginOptions {
  name: string;
  channel: string;
  log: PluginLogger;
  [K: string]: any;
}

export default function(options: VkiQPluginOptions): void {
  // Code goes here
}
