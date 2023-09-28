const content = [
	{
		type: 'icon',
		data: {
			icon: 'fast-forward'
		}
	},
	{
		type: 'divider',
		data: null
	},
	{
		type: 'entryLeft',
		data: {
			title: 'Product Owner',
			organization: 'Acme Labs',
			location: 'London, United Kingdom',
			date: ['April 2017','April 2018'],
			description: 'Define product vision and measure value delivered by development team. Generate product roadmap in collaboration with stakeholders for financial year.',
			icon: 'wrench'
		}
	},
	{
		type: 'divider',
		data: null
	},
	{
		type: 'entryRight',
		data: {
			title: 'Experience Designer',
			organization: 'Tiny Agency',
			location: 'New York, USA',
			date: ['April 2016','April 2017'],
			description: 'Experience and UI design work for clients in the digital space, specialising in mobile experiences with limited screen real estate.',
			icon: 'mobile'
		}
	},
	{
		type: 'divider',
		data: null
	},
	{
		type: 'entryLeft',
		data: {
			title: 'Barista',
			organization: 'Moon Quids',
			location: 'London, United Kingdom',
			date: ['April 2015','April 2016'],
			description: 'Making the finest beverages for the finest customers. Manage a pipeline of piping hot liquids.',
			icon: 'coffee'
		}
	},
	{
		type: 'divider',
		data: null
	},
	{
		type: 'icon',
		data: {
			icon: 'play-circle-o'
		}
	}
];

( (content) => {
	// grab container
	const container = document.querySelector('article.container');
	
	// grab templates
	const divider = document.querySelector('#divider');
	const dividerIcon = document.querySelector('#divider-icon');
	const entryLeft = document.querySelector('#entry-start-left');
	const entryRight = document.querySelector('#entry-start-right');
	
	
	// functions to create sections
	const createDivider = () => {
		return document.importNode(divider.content,true);
	}
	
	const createIconDivider = (icon) => {
		const template = document.importNode(dividerIcon.content, true);
		const center = template.querySelector('.divider > .center');
		center.innerHTML = `<span><i class="fa fa-${icon}"></i></span>`;
		return template;
	}
	
	const createEntryLeft = (config) => {
		const template = document.importNode(entryLeft.content, true);
		const left = template.querySelector('.left.role');
		const right = template.querySelector('.right.details');
		const center = template.querySelector('.center.line');
		left.children[0].innerHTML = `${config.title}`;
		left.children[1].innerHTML = `${config.organization}`;
		left.children[2].innerHTML = `${config.location}`;
		left.children[3].innerHTML = `${config.date[0]}-${config.date[1]}`;
		right.children[0].innerHTML = `${config.description}`;
		const icon = document.createElement('div');
		icon.innerHTML = `<i class="fa fa-${config.icon}"></i>`;
		icon.classList.add('entry-icon');
		center.appendChild(icon);
		return template; 
	}
	
	const createEntryRight = (config) => {
		const template = document.importNode(entryRight.content, true);
		const left = template.querySelector('.left.details');
		const right = template.querySelector('.right.role');
		const center = template.querySelector('.center.line');
		right.children[0].innerHTML = `${config.title}`;
		right.children[1].innerHTML = `${config.organization}`;
		right.children[2].innerHTML = `${config.location}`;
		right.children[3].innerHTML = `${config.date[0]}-${config.date[1]}`;
		left.children[0].innerHTML = `${config.description}`;
		const icon = document.createElement('div');
		icon.innerHTML = `<i class="fa fa-${config.icon}"></i>`;
		icon.classList.add('entry-icon');
		center.appendChild(icon);
		return template;
	}

	// render content
	content.forEach( (el) => {
		switch (el.type) {
			case 'icon': {
				container.appendChild(createIconDivider(el.data.icon));
				break;
			}
			case 'divider': {
				container.appendChild(createDivider());
				break;
			}
			case 'entryLeft': {
				container.appendChild(createEntryLeft(el.data));
				break;
			}
			case 'entryRight': {
				container.appendChild(createEntryRight(el.data));
				break;
			}
			default: {
				break;
			}
		}
	})
	
})(content)