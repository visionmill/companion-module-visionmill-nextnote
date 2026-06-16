// config.ts
// Configuration fields shown in the Companion connection settings panel

import type { SomeCompanionConfigField } from '@companion-module/base'

export interface NextNoteConfig {
	targetHost: string
	targetPort: number
	feedbackPort: number
}

export const DefaultConfig: NextNoteConfig = {
	targetHost: '127.0.0.1',
	targetPort: 8000,
	feedbackPort: 9000,
}

export function getConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'targetHost',
			label: 'NextNote Display IP Address',
			default: '127.0.0.1',
			width: 6,
		},
		{
			type: 'number',
			id: 'targetPort',
			label: 'NextNote OSC Listener Port',
			default: 8000,
			min: 1024,
			max: 65535,
			width: 3,
		},
		{
			type: 'number',
			id: 'feedbackPort',
			label: 'Companion Feedback Receive Port',
			default: 9000,
			min: 1024,
			max: 65535,
			width: 3,
		},
	]
}
