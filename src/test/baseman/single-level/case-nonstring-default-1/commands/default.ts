import {Command, Options, command, metadata, option} from '../../../../..';

export class SomeOptions extends Options {
  @option({
    required: true,
    default: false,
  })
  fooBar: boolean;
}

@command({
  description: 'Foo bar',
})
export default class extends Command {
  @metadata
  execute(options: SomeOptions) {
    return JSON.stringify(options, undefined, 2);
  }
}
