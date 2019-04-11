import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TwitterBoxComponent extends Component {
	@tracked text;
	@tracked error;

	@action
	onInput (value) {
		this.error = false;
		this.text = value;
	}

	@action
	async handleSubmit() {
		let text = this.text;

		let req = await this.args.handleSubmit(text);
		error = req.error;
		text = '';
	}
}